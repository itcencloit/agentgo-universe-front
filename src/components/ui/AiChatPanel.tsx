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

① 식품기사 자격증이 없습니다. CJ제일제당 R&D 합격자의 78%가 보유한 핵심 자격증으로, 다음 시험까지 D-60입니다.
② 교내·외 연구실 인턴 경험이 기재되어 있지 않습니다. 지도교수 연구실 인턴이나 기업 현장실습을 이번 학기에 신청하세요.
③ 관능평가·HACCP 실무 경험이 증빙되지 않습니다. 인턴 또는 동아리 경험을 구체적 수치로 표현하면 좋습니다.

남은 2개 학기 기준 추천 순서:
- 1순위: 식품기사 취득 (3개월 준비)
- 2순위: 교내 연구실 인턴 1학기 수행
- 3순위: 대체단백질·기능성 식품 관련 프로젝트 1건 완성`,
  },
]

const CANNED_RESPONSES: { keywords: string[]; text: string }[] = [
  {
    keywords: ['자격증', '취득', '추천'],
    text: 'CJ제일제당 R&D 직무에는 식품기사가 가장 중요합니다. 그 외 영양사, HACCP 관리사, 위생사도 경쟁력을 높입니다. 식품기사는 3개월 집중 준비, 영양사는 국가시험 일정에 맞춰 준비하세요.',
  },
  {
    keywords: ['포트폴리오', '프로젝트', '연구'],
    text: '식품 R&D 포트폴리오는 ① 소재 탐색 → ② 배합 실험 → ③ 관능평가 → ④ 결과 보고 흐름으로 구성하세요. CJ제일제당 주요 제품(비비고·햇반·다시다) 관련 기능성 원료 분석 프로젝트가 직무 연관성 측면에서 매우 효과적입니다.',
  },
  {
    keywords: ['자소서', '자기소개서', '문항'],
    text: '자소서 1번 문항은 "식품성분분석 A+ 실험 프로젝트"를 중심으로 STAR 구조로 정리하세요. 분석 정확도, 실험 횟수, 개선 결과 등 수치를 반드시 포함하고, CJ제일제당 R&D의 신제품 개발 프로세스와 연결하면 좋습니다.',
  },
  {
    keywords: ['면접', '준비', '질문'],
    text: 'CJ제일제당 R&D 면접에서는 "신소재 발굴 경험"과 "관능평가 수행 방법론"이 자주 나옵니다. "비비고 제품군의 영양 개선 방향을 제안해보세요" 같은 현업 과제형 질문도 빈번합니다. 본인의 실험 경험을 제품 개발 시각으로 재해석해두세요.',
  },
  {
    keywords: ['로드맵', '계획', '전략', '일정'],
    text: 'CJ제일제당 R&D 상반기 공고 기준 역산 시:\n\n이번 학기: 식품기사 취득 + 연구실 인턴 신청\n여름방학: 관능평가 실습 + 포트폴리오 1건 완성\n2학기: 자소서 완성 + 모의 지원 2회 이상\n\n공고 마감이 보통 4월 초이므로 2월까지 자소서 초안을 완성하는 것을 권장합니다.',
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