import { useEffect, useRef, useState } from 'react'

type Message = {
  id: string
  role: 'user' | 'ai'
  text: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'u1',
    role: 'user',
    text: 'CJ제일제당 R&D 직무 희망해. 내 이력서에서 부족한 역량이 무엇인지 분석해주고, 남은 학기 동안 따야 할 자격증과 진로 포트폴리오 가이드를 짜줘.',
  },
  {
    id: 'a1',
    role: 'ai',
    text: `이력서를 분석했어요. CJ제일제당 R&D 직무 기준으로 아래 3가지가 보완 포인트입니다.

① 식품과학·생명공학 관련 실험 이력이 없습니다. 교내 연구실 인턴이나 캡스톤 프로젝트를 연결해두면 좋아요.
② 데이터 분석 도구(R, Python) 역량 증빙이 없습니다. ADsP 또는 SQL 자격증으로 수치화 가능합니다.
③ 영어 역량 증빙이 최신화가 필요합니다. TOEIC 또는 OPIc 갱신을 권장합니다.

남은 2개 학기 기준 추천 순서:
- 1순위: ADsP 취득 (3개월 준비)
- 2순위: R·Python 포트폴리오 프로젝트 1건 완성
- 3순위: 교내 식품공학과 연구실 학부 인턴 신청`,
  },
]

const CANNED_RESPONSES: { keywords: string[]; text: string }[] = [
  {
    keywords: ['자격증', '취득', '추천'],
    text: 'R&D 직무에는 ADsP(데이터분석 준전문가)와 식품기사가 실질적으로 평가됩니다. ADsP는 3개월, 식품기사는 6개월 준비를 권장하며, 병행 시 ADsP를 먼저 취득하는 순서가 효율적입니다.',
  },
  {
    keywords: ['포트폴리오', '프로젝트'],
    text: '포트폴리오는 데이터 수집 → 전처리 → 시각화 → 인사이트 도출 흐름으로 구성하세요. CJ제일제당 주요 품목(햇반, 비비고) 관련 소비자 리뷰나 공개 데이터를 활용하면 직무 연관성을 어필하기 좋습니다.',
  },
  {
    keywords: ['자소서', '자기소개서', '문항'],
    text: '자소서 1번 문항은 "경영통계 A+ 팀 프로젝트"를 중심으로, STAR 구조(상황-역할-행동-결과)로 정리하는 것을 권장합니다. 수치 성과(분석 정확도 향상, 발표 평가 점수 등)를 반드시 포함하세요.',
  },
  {
    keywords: ['면접', '준비'],
    text: '유사 스펙 선배 8명의 합격 패턴을 분석하면, CJ제일제당 R&D 면접에서는 "실험 설계 경험"과 "데이터 기반 의사결정 사례"가 반복 질문됩니다. 본인의 통계 프로젝트 경험을 면접 스크립트로 전환해보세요.',
  },
  {
    keywords: ['로드맵', '계획', '전략'],
    text: '현재 4학년 1학기 기준, 추천 전략은 다음과 같습니다.\n\n이번 학기: ADsP 취득 + 포트폴리오 1건\n여름방학: 교내 연구실 인턴 또는 데이터 대외활동\n2학기: 자소서 완성 + 모의 지원 2회 이상\n\n목표 기업 공고 마감 역산 기준으로 일정을 조정하는 것을 권장합니다.',
  },
]

function getAiResponse(userText: string): string {
  const matched = CANNED_RESPONSES.find((item) =>
    item.keywords.some((kw) => userText.includes(kw)),
  )
  return (
    matched?.text ??
    '좋은 질문이에요. 현재 프로필 데이터를 바탕으로 분석 중입니다. 구체적인 직무명이나 궁금한 항목(자격증·포트폴리오·면접·로드맵)을 알려주시면 더 정확하게 안내드릴 수 있어요.'
  )
}

type AiChatPanelProps = {
  title?: string
  placeholder?: string
}

export function AiChatPanel({ title = 'AI 커리어 어시스턴트', placeholder = '직무·자격증·자소서 등 무엇이든 물어보세요.' }: AiChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = () => {
    const text = input.trim()
    if (!text || isTyping) return

    const userMsg: Message = { id: `u${Date.now()}`, role: 'user', text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const aiMsg: Message = {
        id: `a${Date.now()}`,
        role: 'ai',
        text: getAiResponse(text),
      }
      setMessages((prev) => [...prev, aiMsg])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-[#dce4f3] bg-white overflow-hidden">
      <div className="flex items-center gap-2 border-b border-[#e8eef6] bg-gradient-to-r from-[#3a5fd9] to-[#6b8ef5] px-4 py-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
          AI
        </div>
        <span className="text-sm font-semibold text-white">{title}</span>
        <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-[11px] text-white/90">목업 시연용</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 p-4 min-h-0" style={{ maxHeight: '420px' }}>
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'ai' && (
              <div className="mr-2 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">
                AI
              </div>
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 whitespace-pre-line ${
                msg.role === 'user'
                  ? 'bg-[#3a5fd9] text-white rounded-tr-sm'
                  : 'bg-[#f3f6fb] text-[#364457] rounded-tl-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="mr-2 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">
              AI
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-[#f3f6fb] px-4 py-3">
              <span className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#8da5c8]" style={{ animationDelay: '0ms' }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#8da5c8]" style={{ animationDelay: '150ms' }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#8da5c8]" style={{ animationDelay: '300ms' }} />
              </span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-[#e8eef6] p-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={placeholder}
            className="flex-1 rounded-lg border border-[#d6def0] bg-[#f8fafd] px-3 py-2 text-sm text-[#364457] outline-none focus:border-[#6b8ef5]"
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={isTyping || !input.trim()}
            className="rounded-lg bg-[#3a5fd9] px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
          >
            전송
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {['자격증 추천', '포트폴리오 전략', '자소서 피드백', '면접 준비'].map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setInput(chip)}
              className="rounded-full border border-[#d6e0f4] bg-white px-3 py-1 text-[11px] text-[#4a6096] hover:bg-[#eef2fb]"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}