import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  roadmapItems,
  roadmapModes,
  type RoadmapMode,
  type RoadmapSelection,
} from '../../data/roadmap'
import type { GlobalPage } from '../../types/unisync'
import { PAGE_TO_PATH } from './AppShell'

type HeaderProps = {
  activePage: GlobalPage
  onPageChange: (page: GlobalPage) => void
  onRoadmapSelect: (selection: RoadmapSelection) => void
}

const utilityLinks = ['MAIN', '로그아웃', '사용자 가이드', '학교홈페이지', '화면오류해결']

const primaryMenus: Array<{ id: GlobalPage; label: string }> = [
  { id: 'home', label: 'HOME' },
  { id: 'roadmap', label: 'My로드맵' },
  { id: 'mentoring', label: '졸업선배 노하우·멘토링' },
  { id: 'employment', label: '취업자료·기업분석' },
  { id: 'recruitment', label: '채용정보' },
  { id: 'diagnosis', label: '역량진단' },
  { id: 'sitemap', label: '사이트맵' },
]

const yearlyRoadmapCard = {
  gradient: 'from-[#a5be4f] to-[#ddd371]',
  label: '학년별로드맵',
  step: 'step 4.',
  items: ['My로드맵'],
}

const roadmapItemHoverClass: Record<RoadmapMode, string> = {
  career: 'hover:text-[#4ea29a]',
  growth: 'hover:text-[#5b86f7]',
  research: 'hover:text-[#f0b03f]',
}

export const Header: React.FC<HeaderProps> = ({ activePage, onPageChange, onRoadmapSelect }) => {
  const [isRoadmapOpen, setIsRoadmapOpen] = useState(false)
  const navigate = useNavigate()

  const handleMenuClick = (menuId: GlobalPage) => {
    onPageChange(menuId)
    setIsRoadmapOpen(false)
  }

  const handleRoadmapSelect = (selection: RoadmapSelection) => {
    onRoadmapSelect(selection)
    navigate(PAGE_TO_PATH.roadmap)
    setIsRoadmapOpen(false)
  }

  return (
    <header className="relative z-40 bg-[#0f2238] text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1380px] justify-end gap-3 px-5 py-2 text-xs">
          {utilityLinks.map((link, index) => (
            <div key={link} className="flex items-center gap-3">
              {index > 0 ? <span className="text-white/45">|</span> : null}
              <span>{link}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-5">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-sm font-bold">
              PK
            </div>
            <div className="flex items-center gap-6">
              <div className="text-[22px] font-semibold tracking-[-0.02em]">
                국립부경대학교 PKNU 시스템
              </div>
              <div className="hidden text-[15px] font-semibold text-white/85 xl:block">
                대학생 서비스
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-[15px] font-semibold lg:flex">
            {primaryMenus.map((menu) => {
              const isActive =
                menu.id === activePage || (menu.id === 'roadmap' && activePage === 'resumeLab')
              const isRoadmap = menu.id === 'roadmap'

              if (isRoadmap) {
                return (
                  <div
                    key={menu.id}
                    className="relative"
                    onMouseEnter={() => setIsRoadmapOpen(true)}
                    onMouseLeave={() => setIsRoadmapOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setIsRoadmapOpen((current) => !current)}
                      className={`flex items-center gap-2 ${
                        isActive || isRoadmapOpen
                          ? 'text-[#88b5ff]'
                          : 'transition hover:text-[#88b5ff]'
                      }`}
                    >
                      <span>{menu.label}</span>
                    </button>
                  </div>
                )
              }

              return (
                <button
                  key={menu.id}
                  type="button"
                  onClick={() => handleMenuClick(menu.id)}
                  className={isActive ? 'text-[#88b5ff]' : 'transition hover:text-[#88b5ff]'}
                >
                  {menu.label}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {isRoadmapOpen ? (
        <div
          className="absolute left-0 top-full z-50 w-full border-t border-[#d9dee7] bg-white text-slate-900 shadow-[0_18px_40px_rgba(15,34,56,0.12)]"
          onMouseEnter={() => setIsRoadmapOpen(true)}
          onMouseLeave={() => setIsRoadmapOpen(false)}
        >
          <div className="mx-auto max-w-[1380px] px-5">
            <div className="ml-[150px] grid grid-cols-4 gap-12 px-10 py-5">
              {roadmapModes.map((mode) => (
                <div key={mode.id}>
                  <button
                    type="button"
                    onClick={() =>
                      handleRoadmapSelect({
                        mode: mode.id,
                        taskId: roadmapItems[mode.id][0].id,
                        viewMode: 'detail',
                      })
                    }
                    className={`flex w-full items-center justify-between rounded-md bg-gradient-to-r ${mode.gradient} px-4 py-4 text-left text-white`}
                  >
                    <div>
                      <div className="text-sm text-white/80">{mode.step}</div>
                      <div className="mt-1 text-[18px] font-semibold tracking-[-0.03em]">
                        {mode.title}
                      </div>
                    </div>
                    <span className="text-xl font-light">↗</span>
                  </button>

                  <div className="mt-3 space-y-0.5">
                    {roadmapItems[mode.id].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          handleRoadmapSelect({
                            mode: mode.id,
                            taskId: item.id,
                            viewMode: 'detail',
                          })
                        }
                        className={`flex w-full items-center justify-between border-b border-[#e9edf3] py-2 text-left text-[15px] text-[#5c6a7d] transition hover:translate-x-0.5 ${roadmapItemHoverClass[mode.id]}`}
                      >
                        <span>{item.title}</span>
                        <span className="text-[#7f8b9b]">›</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <button
                  type="button"
                  onClick={() =>
                    handleRoadmapSelect({
                      mode: 'research',
                      taskId: roadmapItems.research[0].id,
                      viewMode: 'yearly',
                    })
                  }
                  className={`flex w-full items-center justify-between rounded-md bg-gradient-to-r ${yearlyRoadmapCard.gradient} px-4 py-4 text-left text-white`}
                >
                  <div>
                    <div className="text-sm text-white/80">{yearlyRoadmapCard.step}</div>
                    <div className="mt-1 text-[18px] font-semibold tracking-[-0.03em]">
                      {yearlyRoadmapCard.label}
                    </div>
                  </div>
                  <span className="text-xl font-light">▮▮▮</span>
                </button>

                <div className="mt-3 space-y-0.5">
                  {yearlyRoadmapCard.items.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        handleRoadmapSelect({
                          mode: 'research',
                          taskId: roadmapItems.research[0].id,
                          viewMode: 'yearly',
                        })
                      }
                      className="flex w-full items-center justify-between border-b border-[#e9edf3] py-2 text-left text-[15px] text-[#5c6a7d] transition hover:translate-x-0.5 hover:text-[#8ca53d]"
                    >
                      <span>{item}</span>
                      <span className="text-[#7f8b9b]">›</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
