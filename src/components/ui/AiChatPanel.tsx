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
    text: '식품공학전공 기준으로 품질관리나 음료 연구 직무를 희망해. 내 이력서에서 부족한 역량이 무엇인지 분석해주고, 남은 학기 동안 준비할 자격증과 포트폴리오 가이드를 짜줘.',
  },
  {
    id: 'a1',
    role: 'ai',
    text: `이력서를 분석했어요. 식품 품질·연구 직무 기준으로 아래 3가지가 보완 포인트입니다.

① 식품기사 자격증이 없습니다. 식품공학 계열 품질·연구 직무에서 가장 활용도가 높은 자격증입니다.
② 식품위생·품질평가 실습 경험이 지원서 문장으로 정리되어 있지 않습니다. 전공 실험을 직무 기준으로 다시 써야 합니다.
③ 캡스톤디자인 또는 공정개선 사례가 빠져 있습니다. 결과 수치와 개선 포인트를 포트폴리오로 남기면 좋습니다.

남은 2개 학기 기준 추천 순서:
- 1순위: 식품기사 취득
- 2순위: 품질·위생 실습 경험 문서화
- 3순위: 캡스톤디자인 결과 포트폴리오 1건 완성`,
  },
]

const CANNED_RESPONSES: { keywords: string[]; text: string }[] = [
  {
    keywords: ['자격증', '취득', '추천'],
    text: '식품공학전공 기준 품질·연구 직무에는 식품기사가 가장 중요합니다. 그 외 위생사, 수산제조기사도 경쟁력을 높입니다. 우선순위는 식품기사부터 두는 편이 합리적입니다.',
  },
  {
    keywords: ['포트폴리오', '프로젝트', '연구'],
    text: '식품 품질·연구 포트폴리오는 ① 실험 목적 → ② 분석 방법 → ③ 품질 지표 또는 위생 기준 확인 → ④ 개선 결과 보고 흐름으로 구성하세요. 식품화학, 식품미생물학, 캡스톤디자인 사례를 중심으로 정리하면 직무 연관성이 높습니다.',
  },
  {
    keywords: ['자소서', '자기소개서', '문항'],
    text: '자소서 1번 문항은 식품화학 또는 식품위생학 실험 경험을 중심으로 STAR 구조로 정리하세요. 분석 정확도, 실험 횟수, 기준 준수 여부, 개선 결과 등 수치를 포함하면 설득력이 높습니다.',
  },
  {
    keywords: ['면접', '준비', '질문'],
    text: '품질관리·식품연구 면접에서는 위생 기준 이해, 품질 이상 원인 추적, 실험 데이터 해석 방식이 자주 나옵니다. 본인의 실험 경험을 품질 기준과 개선 관점으로 재해석해두세요.',
  },
  {
    keywords: ['로드맵', '계획', '전략', '일정'],
    text: '식품공학전공 품질·연구 직무 기준 로드맵은 다음이 적절합니다.\n\n이번 학기: 식품기사 준비 + 전공 실험 경험 정리\n여름방학: 캡스톤디자인·품질평가 포트폴리오 1건 완성\n2학기: 자소서 완성 + 모의 지원 2회 이상\n\n학과 게시판 기반 수시채용 비중이 높으므로 상시 지원 가능한 상태를 유지하는 것이 중요합니다.',
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
