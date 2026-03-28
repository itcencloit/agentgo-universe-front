import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import aiIcon from '../../assets/ai.png'
import { InteractionToast } from '../ui/InteractionToast'
import { SectionCard } from '../ui/SectionCard'

type WizardStep = 'intent' | 'mapping' | 'guide' | 'complete'
type QuestionId = 'q1' | 'q2' | 'q3'

const lookupTimestamp = '2026-03-27 11:13:49 기준'

const wizardSteps: Array<{ id: WizardStep; label: string; title: string; helper: string }> = [
  { id: 'intent', label: '1', title: '출제 의도 분석', helper: '문항 목적과 평가 포인트 해석' },
  { id: 'mapping', label: '2', title: '문항별 내 이력 연결', helper: '교과, 실험, 프로젝트 근거 매핑' },
  { id: 'guide', label: '3', title: '작성 가이드', helper: '문단 구조와 핵심 키워드 제안' },
  { id: 'complete', label: '4', title: '보완 및 완성', helper: '부족 역량과 제출 체크리스트 점검' },
]

const cjTracks = ['R&D(식품)', 'R&D(발효)', 'R&D(Sensory)', '일반신입 공통']

const questions: Record<
  QuestionId,
  {
    category: string
    title: string
    prompt: string
    intent: string[]
    evaluation: string[]
    warning: string[]
    evidence: Array<{ label: string; value: string; note: string }>
    gaps: string[]
    outline: string[]
    keywords: string[]
    checklist: string[]
    nextAction: string
  }
> = {
  q1: {
    category: 'CJ제일제당 R&D(식품)',
    title: '지원동기 및 입사 후 성장 로드맵',
    prompt:
      'CJ제일제당과 해당 직무에 지원한 동기 및 입사 후 성장 로드맵을 구체적으로 작성해 주세요.',
    intent: [
      'CJ제일제당 자체에 대한 지원 동기와 식품 R&D 직무 선택 이유를 함께 확인하려는 문항입니다.',
      '막연한 관심이 아니라 전공 경험이 직무 적합성으로 연결되는지 보고자 합니다.',
      '입사 후 성장 계획이 실제 직무 흐름과 맞는지도 함께 평가합니다.',
    ],
    evaluation: [
      '식품공학 전공과 CJ 식품사업부문 기술 방향의 연결성',
      '품질·연구 직무에 대한 이해도와 진로 일관성',
      '입사 후 1년, 3년, 5년 성장 계획의 현실성',
    ],
    warning: [
      '기업 공통 지원동기만 쓰면 직무 적합성이 약하게 보일 수 있습니다.',
      '성장 로드맵이 추상적이면 실무 이해도가 낮아 보일 수 있습니다.',
    ],
    evidence: [
      {
        label: '전공 근거',
        value: '식품위생학, 식품화학, 식품미생물학',
        note: '품질·연구 직무 기초 교과',
      },
      {
        label: '직무 연결 경험',
        value: '캡스톤디자인, 품질평가 실습',
        note: '문제 해결과 기준 해석 경험',
      },
      { label: '목표 방향', value: '품질·연구 직무 중심', note: '현재 커리어 로드맵과 일치' },
      {
        label: '기업분석 연계',
        value: 'CJ 공채 패턴·우대 자격 분석',
        note: '기업 분석 리포트 활용 가능',
      },
    ],
    gaps: [
      'CJ제일제당만의 지원 동기를 보여줄 산업/제품 관점 근거 보완 필요',
      '입사 후 성장 로드맵에 식품기사, 프로젝트 문서화 계획 연결 필요',
    ],
    outline: [
      '1문단: CJ제일제당과 식품 R&D 직무를 선택한 이유',
      '2문단: 전공 교과와 실험 경험이 해당 직무와 맞는 근거',
      '3문단: 입사 후 1년, 3년, 5년 성장 계획',
    ],
    keywords: ['식품공학전공', '품질·연구 직무', '기준서 검토', '실험 기반 해석', '성장 로드맵'],
    checklist: [
      'CJ제일제당 선택 이유를 식품사업부문과 연결했는가',
      '전공 교과와 실험 경험이 직무 근거로 제시됐는가',
      '입사 후 성장 계획이 연차별로 구체화됐는가',
    ],
    nextAction: 'CJ제일제당 식품사업부문 분석 리포트의 핵심 키워드를 반영해 지원동기 초안 1차 작성',
  },
  q2: {
    category: 'CJ제일제당 R&D(식품)',
    title: '연구주제, 이수 과목, 실험기기 및 Skill',
    prompt:
      '석사(혹은 박사) 학위 연구주제에 대해 구체적으로 기술하여 주시길 바라며, 지원 직무 관련 이수 과목과 사용했던 실험기기 및 실험 Skill에 대해 작성해 주세요.',
    intent: [
      '지원자의 전공 깊이와 연구/실험 경험의 실무 연결성을 검증하려는 문항입니다.',
      '단순 과목 나열보다 실제 사용 가능한 실험기기와 Skill을 보고자 합니다.',
      '학부생이라면 연구주제 대신 캡스톤, 종합설계, 실험 과목 경험을 구조화해 제시해야 합니다.',
    ],
    evaluation: [
      '직무 관련 이수 과목의 적절성',
      '실험기기, 분석기법, 실험 Skill의 구체성',
      '연구주제 또는 프로젝트 경험을 직무 언어로 전환하는 능력',
    ],
    warning: [
      '과목명만 나열하면 직무 관련성이 약하게 보입니다.',
      '실험기기와 Skill을 실제 사용 맥락 없이 적으면 전문성이 낮아 보입니다.',
    ],
    evidence: [
      {
        label: '관련 과목',
        value: '식품위생학, 식품화학, 식품미생물학, 품질관리학',
        note: '직무 관련 이수 과목',
      },
      {
        label: '프로젝트',
        value: '캡스톤디자인, 식품품질평가 종합설계',
        note: '연구주제 대체 근거',
      },
      {
        label: '실험기기',
        value: 'pH meter, UV-Vis, 배양기, 관능평가 도구',
        note: '직접 사용 경험 정리 필요',
      },
      {
        label: '실험 Skill',
        value: '미생물 배양, 품질지표 확인, 위생 기준 해석',
        note: 'Q2 핵심 근거',
      },
    ],
    gaps: [
      '실험기기 사용 경험을 결과와 함께 정리한 문장화 필요',
      '연구주제 수준으로 보이도록 캡스톤 역할과 산출물 보완 필요',
    ],
    outline: [
      '1문단: 연구주제 또는 프로젝트 주제와 목적',
      '2문단: 관련 이수 과목과 직무 연결 근거',
      '3문단: 사용 기기, 실험 Skill, 실무 활용 가능성',
    ],
    keywords: ['종합설계', '실험기기', '분석 Skill', '직무 관련 이수 과목', '연구주제 대체 근거'],
    checklist: [
      '관련 과목을 과목명만이 아니라 배운 역량으로 정리했는가',
      '실험기기와 Skill이 구체적 사용 경험과 함께 제시됐는가',
      '프로젝트 경험이 연구주제 수준으로 구조화됐는가',
    ],
    nextAction:
      'Q2용 실험기기/Skill 목록을 캡스톤 및 종합설계 기준으로 정리하고, 각 기기의 사용 목적 한 줄씩 추가',
  },
  q3: {
    category: 'CJ제일제당 R&D(식품)',
    title: '논문 초록 및 제출 자료 점검',
    prompt:
      'Step 2 대학원(석사) 항목에 석사 졸업 논문 초록을 첨부해 주세요. [파일명] 직무명_성명_생년월일 6자리',
    intent: [
      '제출 서류 형식 준수 여부와 연구 기반 지원자 여부를 확인하는 문항입니다.',
      '학부생에게는 직접 적용되지 않더라도 제출 자료 준비 수준을 점검하는 역할을 합니다.',
      '필수 제출 서류와 파일 규칙을 정확히 따르는지 보는 행정성 문항입니다.',
    ],
    evaluation: [
      '해당 전형 대상 여부 판단',
      '제출 서류 형식과 파일명 규칙 준수 여부',
      '연구요약 또는 포트폴리오 대체 자료 준비 수준',
    ],
    warning: [
      '대상 전형이 아닌데도 불필요한 자료를 혼합하면 오히려 혼란을 줄 수 있습니다.',
      '파일명 규칙과 제출 형식을 놓치면 기본적인 준비 부족으로 보일 수 있습니다.',
    ],
    evidence: [
      {
        label: '전형 구분',
        value: '석사 이상 전형 여부 확인',
        note: '학부 지원자는 해당 여부 검토 필요',
      },
      {
        label: '대체 자료',
        value: '캡스톤 요약본, 포트폴리오, 실험 결과 정리',
        note: '연구 기반 설명 자료',
      },
      { label: '제출 규칙', value: '직무명_성명_생년월일 6자리', note: '파일명 형식 준수' },
      { label: '체크 포인트', value: '첨부 누락 방지', note: '최종 제출 전 확인' },
    ],
    gaps: [
      '캡스톤 결과 요약본 또는 포트폴리오 형태의 대체 설명 자료 필요',
      '지원 전형별 제출서류 체크리스트 정리 필요',
    ],
    outline: [
      '1문단: 해당 전형에서 요구하는 제출 자료 확인',
      '2문단: 보유 자료 또는 대체 자료 정리',
      '3문단: 제출 형식, 파일명, 누락 여부 점검',
    ],
    keywords: ['제출 서류', '파일명 규칙', '연구요약', '포트폴리오', '최종 점검'],
    checklist: [
      '지원 전형에서 실제 요구하는 첨부 자료인지 확인했는가',
      '파일명 규칙과 제출 형식을 맞췄는가',
      '연구요약 또는 대체 포트폴리오 자료를 준비했는가',
    ],
    nextAction: '지원 전형별 제출 자료 목록을 정리하고, 캡스톤 요약본을 포트폴리오 형태로 보완',
  },
}

const questionOrder: QuestionId[] = ['q1', 'q2', 'q3']

const analysisSteps = [
  '지금까지의 학사 활동과 비교과 이력을 종합 분석',
  '성적 흐름과 직무 관련 이수 과목의 연결성 검토',
  '역량진단 결과와 현재 준비 수준 교차 확인',
  '강점 요소와 보완이 필요한 항목 우선 정리',
  '기업 문항 의도와 학생 이력의 적합 포인트 매칭',
  '문항 맞춤형 자소서 초안 구조와 표현 방향 생성',
]

const aiDraftTemplates: Record<QuestionId, string> = {
  q1: 'CJ제일제당은 식품 산업 내에서 연구개발과 품질 경쟁력을 동시에 강화하고 있는 기업이라고 판단했습니다. 저는 식품공학 전공 과정에서 식품위생학, 식품화학, 식품미생물학을 이수하며 품질·연구 직무의 기초 역량을 쌓았고, 이러한 전공 경험을 실제 식품사업부문 R&D 직무에서 확장하고 싶어 지원했습니다.\n\n특히 캡스톤디자인과 품질평가 실습을 수행하며 기준을 해석하고 결과를 비교·정리하는 경험을 쌓았고, 이는 CJ제일제당이 요구하는 연구개발 직무의 문제 해결 역량과 연결된다고 생각합니다.\n\n입사 후에는 1년 차에 제품 기준과 연구 프로세스를 빠르게 익히고, 3년 차에는 품질과 연구를 연결할 수 있는 실무형 연구원으로 성장하며, 이후에는 식품사업부문의 제품 경쟁력 향상에 기여할 수 있는 연구개발 인재로 성장하고 싶습니다.',
  q2: '지원 직무와 관련하여 식품위생학, 식품화학, 식품미생물학, 식품품질관리학을 이수하며 식품 안전성과 품질 평가, 미생물 관리에 대한 기초를 학습했습니다. 또한 캡스톤디자인과 식품품질평가 종합설계 과목을 통해 실제 문제를 설정하고 결과를 비교·해석하는 경험을 쌓았습니다.\n\n프로젝트 수행 과정에서는 pH meter, UV-Vis, 배양기, 관능평가 도구 등을 활용하여 품질지표를 확인하고 결과를 정리했습니다. 실험 Skill 측면에서는 미생물 배양, 품질지표 확인, 위생 기준 해석 경험을 보유하고 있으며, 이러한 경험은 식품 R&D 직무에서 요구되는 실험 기반 분석 역량과 직접 연결된다고 생각합니다.\n\n향후에는 각 실험기기 활용 경험과 결과 해석 사례를 더 정교하게 정리해 직무 적합성을 구체적으로 보여주고자 합니다.',
  q3: '해당 문항은 연구 기반 지원자의 제출 자료 준비 수준을 확인하기 위한 문항이라고 이해했습니다. 학부 과정 지원자이기 때문에 논문 초록 첨부 요건이 직접 적용되는지 먼저 확인하고, 필요 시 캡스톤 요약본이나 포트폴리오 자료를 대체 자료로 준비하는 방향이 적절하다고 판단했습니다.\n\n또한 직무명, 성명, 생년월일 형식의 파일명 규칙을 정확히 준수하고, 제출 서류 누락이 없도록 최종 점검 체크리스트를 함께 관리하겠습니다.',
}

export function ResumeLabPage() {
  const [currentStep] = useState<WizardStep>('intent')
  const [currentQuestion, setCurrentQuestion] = useState<QuestionId>('q1')
  const [answerDrafts, setAnswerDrafts] = useState<Record<QuestionId, string>>({
    q1: '',
    q2: '',
    q3: '',
  })
  const [isGeneratingDraft, setIsGeneratingDraft] = useState(false)
  const [draftGenerationState, setDraftGenerationState] = useState<'running' | 'success'>('running')
  const [activeAnalysisIndex, setActiveAnalysisIndex] = useState(0)
  const [completedAnalysisIndexes, setCompletedAnalysisIndexes] = useState<number[]>([])
  const [feedback, setFeedback] = useState<string | null>(null)
  const [feedbackTone, setFeedbackTone] = useState<'info' | 'success'>('info')
  const navigate = useNavigate()

  const currentStepIndex = wizardSteps.findIndex((step) => step.id === currentStep)
  const currentQuestionData = questions[currentQuestion]
  const currentQuestionIndex = questionOrder.indexOf(currentQuestion)

  useEffect(() => {
    if (!isGeneratingDraft) return

    setDraftGenerationState('running')
    setActiveAnalysisIndex(0)
    setCompletedAnalysisIndexes([])

    const stepTimer = window.setInterval(() => {
      setCompletedAnalysisIndexes((current) => {
        const nextIndex = current.length
        if (nextIndex >= analysisSteps.length) {
          return current
        }
        return [...current, nextIndex]
      })

      setActiveAnalysisIndex((current) => {
        if (current >= analysisSteps.length - 1) {
          return current
        }
        return current + 1
      })
    }, 700)

    const finishTimer = window.setTimeout(() => {
      window.clearInterval(stepTimer)
      setCompletedAnalysisIndexes(analysisSteps.map((_, index) => index))
      setDraftGenerationState('success')

      window.setTimeout(() => {
        setAnswerDrafts((current) => ({
          ...current,
          [currentQuestion]: aiDraftTemplates[currentQuestion],
        }))
        setIsGeneratingDraft(false)
        setFeedbackTone('success')
        setFeedback(`${currentQuestion.toUpperCase()} 문항 초안이 생성되었습니다.`)
      }, 700)
    }, analysisSteps.length * 700 + 500)

    return () => {
      window.clearInterval(stepTimer)
      window.clearTimeout(finishTimer)
    }
  }, [currentQuestion, isGeneratingDraft])

  useEffect(() => {
    if (!feedback) return
    const timer = window.setTimeout(() => setFeedback(null), 1800)
    return () => window.clearTimeout(timer)
  }, [feedback])

  return (
    <div className="space-y-4">
      <InteractionToast message={feedback} tone={feedbackTone} />
      {isGeneratingDraft ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5 backdrop-blur-[8px]">
          <div className="w-full max-w-[500px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_48px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between border-b border-[#dce4f3] px-6 pb-5 pt-6">
              <div>
                <div className="text-[20px] font-bold text-[#1e293b]">AI 초안작성</div>
              </div>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-md p-2 text-[#6b7280] transition-all hover:bg-[#eef6ff] hover:text-[#1e293b]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="px-6 py-10 text-center">
              {draftGenerationState === 'running' ? (
                <>
                  <div className="mx-auto mb-10 h-20 w-20">
                    <svg className="h-20 w-20 animate-spin" viewBox="0 0 50 50" fill="none">
                      <circle cx="25" cy="25" r="20" stroke="#dbe7ff" strokeWidth="3" />
                      <path
                        d="M25 5a20 20 0 0 1 20 20"
                        stroke="#3a5fd9"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="mx-auto max-w-[420px] space-y-3">
                    {analysisSteps.map((step, index) => {
                      const isCompleted = completedAnalysisIndexes.includes(index)
                      const isActive = !isCompleted && index === activeAnalysisIndex

                      return (
                        <div
                          key={step}
                          className={`leading-[1.6] transition-all ${
                            isActive
                              ? 'text-[18px] font-bold text-[#0055e9] scale-[1.05]'
                              : isCompleted
                                ? 'text-[14px] text-[#6b7280]'
                                : 'text-[14px] text-[#9ca3af]'
                          }`}
                        >
                          {isCompleted ? `✓ ${step}` : isActive ? `${step}...` : step}
                        </div>
                      )
                    })}
                  </div>
                </>
              ) : (
                <div className="rounded-2xl border border-[#cde7d5] bg-[#f3fbf5] px-5 py-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2e7d32] text-lg font-bold text-white">
                    ✓
                  </div>
                  <div className="mt-4 text-[20px] font-bold text-[#2e7d32]">
                    {currentQuestion.toUpperCase()} 문항 초안 생성 완료
                  </div>
                  <div className="mt-2 text-xs leading-5 text-[#4e6a57]">
                    학사 활동, 성적, 역량진단 결과, 기업 문항 의도를 종합해 바로 수정 가능한 초안
                    형태로 반영했습니다.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <div className="rounded-xl border border-[#c9d9f8] bg-gradient-to-r from-[#eef3ff] to-[#f3f6fb] px-5 py-5">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-xs font-bold text-white">
            AI
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-[#364457]">기업 맞춤 자소서 위자드</span>
              <span className="rounded-full bg-[#3a5fd9] px-2 py-0.5 text-[11px] font-semibold text-white">
                학생 기준 분석
              </span>
              <span className="text-[11px] text-[#8a9ab5]">{lookupTimestamp}</span>
            </div>
            <p className="mt-1 text-sm leading-6 text-[#64748b]">
              CJ제일제당 R&D 전형 자소서 문항을 기준으로, 출제 의도 분석부터 내 이력 연결, 작성
              가이드, 보완 체크까지 단계형으로 진행합니다.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {cjTracks.map((track) => (
                <span
                  key={track}
                  className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${
                    track === 'R&D(식품)'
                      ? 'border-[#c9d9f8] bg-white text-[#3a5fd9]'
                      : 'border-[#dce4f3] bg-white/70 text-[#64748b]'
                  }`}
                >
                  {track}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionCard eyebrow="자소서 설계" title="문항별 위자드 진행">
        <div className="space-y-5">
          <div className="space-y-4">
            <div className="rounded-xl border border-[#dce4f3] bg-white p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-[#3a5fd9]">
                    문항 선택
                  </div>
                  <div className="mt-1 text-sm font-semibold text-[#364457]">
                    {currentQuestionData.category}
                  </div>
                </div>
                <div className="text-[11px] text-[#8a9ab5]">
                  문항 {currentQuestionIndex + 1} / {questionOrder.length} · 현재 단계{' '}
                  {currentStepIndex + 1} / {wizardSteps.length}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {questionOrder.map((key) => {
                  const question = questions[key]
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setCurrentQuestion(key)
                        setFeedbackTone('info')
                        setFeedback(`${key.toUpperCase()} 문항으로 전환했습니다.`)
                      }}
                      className={`rounded-full border px-4 py-2 text-left transition-colors ${
                        currentQuestion === key
                          ? 'border-[#bfd4ff] bg-[#eef4ff]'
                          : 'border-[#e4e9f2] bg-[#fbfcfe] hover:bg-[#f8fbff]'
                      }`}
                    >
                      <span className="text-[11px] font-semibold text-[#7b8597]">
                        {key.toUpperCase()}
                      </span>
                      <span className="ml-2 text-[12px] font-semibold text-[#364457]">
                        {question.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="rounded-xl border border-[#dce4f3] bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">
                    AI
                  </div>
                  <div className="text-sm font-semibold text-[#364457]">
                    {wizardSteps[currentStepIndex].title}
                  </div>
                </div>
                <span className="rounded-full bg-[#eef2fb] px-2.5 py-1 text-[11px] font-semibold text-[#3a5fd9]">
                  {currentQuestion.toUpperCase()}
                </span>
              </div>
              <div className="mt-3 rounded-lg border border-[#e4e9f2] bg-[#f8fbff] px-4 py-4 text-sm leading-6 text-[#556276]">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex-1">{currentQuestionData.prompt}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setFeedbackTone('info')
                      setFeedback('기업 분석 페이지로 이동합니다.')
                      navigate('/employment')
                    }}
                    className="shrink-0 rounded border border-[#c9d9f8] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#3a5fd9] hover:bg-[#eef4ff]"
                  >
                    기업분석 연결
                  </button>
                </div>
              </div>

              {currentStep === 'intent' ? (
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border border-[#dce4f3] bg-[#f8fbff] p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-[#3a5fd9]">
                      출제자 의도
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-[#556276]">
                      {currentQuestionData.intent.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3a5fd9]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-[#dce4f3] bg-white p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-[#2e7d32]">
                      평가 포인트
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-[#556276]">
                      {currentQuestionData.evaluation.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2e7d32]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-[#dce4f3] bg-white p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-[#d97706]">
                      작성 리스크
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-[#556276]">
                      {currentQuestionData.warning.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d97706]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}

              {currentStep === 'mapping' ? (
                <div className="mt-4 space-y-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    {currentQuestionData.evidence.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-lg border border-[#dce4f3] bg-[#f8fbff] p-4"
                      >
                        <div className="text-[11px] font-bold uppercase tracking-wide text-[#7b8597]">
                          {item.label}
                        </div>
                        <div className="mt-2 text-[15px] font-semibold text-[#364457]">
                          {item.value}
                        </div>
                        <div className="mt-1 text-xs text-[#64748b]">{item.note}</div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border border-[#f7d7aa] bg-[#fff9ef] p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-[#b45309]">
                      보완 필요 항목
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-[#6b5a3f]">
                      {currentQuestionData.gaps.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f59e0b]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : null}

              {currentStep === 'guide' ? (
                <div className="mt-4 space-y-4">
                  <div className="grid gap-3 md:grid-cols-3">
                    {currentQuestionData.outline.map((item, index) => (
                      <div
                        key={item}
                        className="rounded-lg border border-[#dce4f3] bg-[#f8fbff] p-4"
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3a5fd9] text-[11px] font-bold text-white">
                          {index + 1}
                        </div>
                        <div className="mt-3 text-sm font-semibold text-[#364457]">{item}</div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border border-[#dce4f3] bg-white p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-[#3a5fd9]">
                      추천 키워드
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {currentQuestionData.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-[#c9d9f8] bg-[#eef4ff] px-3 py-1 text-[11px] font-semibold text-[#3a5fd9]"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              {currentStep === 'complete' ? (
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg border border-[#dce4f3] bg-white p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-[#3a5fd9]">
                      최종 체크리스트
                    </div>
                    <div className="mt-3 space-y-2">
                      {currentQuestionData.checklist.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-lg border border-[#eef2f7] bg-[#f8fbff] px-3 py-3 text-sm text-[#556276]"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#c9d9f8] bg-white text-[10px] font-bold text-[#3a5fd9]">
                            ✓
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-[#c9d9f8] bg-[#eef4ff] p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-[#3a5fd9]">
                      다음 액션
                    </div>
                    <div className="mt-2 text-sm font-semibold text-[#364457]">
                      {currentQuestionData.nextAction}
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="mt-5 rounded-xl border border-[#dce4f3] bg-[#fbfcfe] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wide text-[#3a5fd9]">
                      문항 작성
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[#364457]">
                      {currentQuestion.toUpperCase()}. {currentQuestionData.prompt}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFeedback(null)
                      setIsGeneratingDraft(true)
                    }}
                    className="inline-flex items-center gap-1.5 rounded bg-[#3a5fd9] px-3 py-2 text-[11px] font-semibold text-white hover:bg-[#2e4dbf]"
                  >
                    <img src={aiIcon} alt="" className="h-3.5 w-3.5" />
                    AI 초안작성
                  </button>
                </div>
                <textarea
                  value={answerDrafts[currentQuestion]}
                  onChange={(event) =>
                    setAnswerDrafts((current) => ({
                      ...current,
                      [currentQuestion]: event.target.value,
                    }))
                  }
                  placeholder="이 문항에 대한 초안을 작성해보세요. 문항별로 따로 저장하면서 진행할 수 있습니다."
                  className="mt-3 min-h-[180px] w-full rounded-lg border border-[#dce4f3] bg-white px-4 py-3 text-sm leading-6 text-[#364457] outline-none transition focus:border-[#bfd4ff]"
                />
                <div className="mt-3 flex items-center justify-between gap-3 text-[11px] text-[#8a9ab5]">
                  <span>{answerDrafts[currentQuestion].length}자 입력</span>
                  <span>현재 문항만 집중해서 작성하는 위자드 방식</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
