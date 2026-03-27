import { sidebarItems } from '../../data/unisync'
import type { AppSection } from '../../types/unisync'

type SidebarProps = {
  activeSection: AppSection
  onSectionChange: (section: AppSection) => void
}

const activeClassMap: Record<AppSection, string> = {
  dashboard: 'border-[#BFD4FF] bg-[#EEF4FF] text-[#2454C8]',
  roadmap: 'border-[#BFD4FF] bg-[#EEF4FF] text-[#2454C8]',
  resumeLab: 'border-[#BFD4FF] bg-[#EEF4FF] text-[#2454C8]',
  pivotLab: 'border-[#BFD4FF] bg-[#EEF4FF] text-[#2454C8]',
  mockSimulation: 'border-[#BFD4FF] bg-[#EEF4FF] text-[#2454C8]',
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="hidden lg:fixed lg:bottom-0 lg:left-0 lg:top-[121px] lg:block lg:w-60 lg:overflow-y-auto lg:border-r lg:border-[#DCE4F3] lg:bg-white">
      <div className="border-b border-[#DCE4F3] p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#316BFF_0%,#4AA2FF_100%)] text-lg font-semibold text-white">
            KM
          </div>
          <div>
            <div className="font-semibold text-gray-900">김미래</div>
            <div className="mt-0.5 text-xs text-gray-500">경영학과 / 데이터 마케팅 트랙</div>
          </div>
        </div>
        <div className="space-y-1 text-xs text-gray-600">
          <div>4학년</div>
          <div>지도교수 조성민</div>
          <div>커리어 목표 K사 Data Marketer</div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4 font-semibold text-gray-900">My Roadmap</div>
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = item.id === activeSection

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSectionChange(item.id)}
                className={`w-full rounded-xl border px-3 py-3 text-left text-sm ${
                  isActive
                    ? activeClassMap[item.id]
                    : 'border-transparent bg-white text-gray-700 hover:border-[#DCE4F3] hover:bg-[#F7FAFF]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-semibold">{item.label}</span>
                  <span className={`rounded-lg px-2 py-0.5 text-[11px] ${isActive ? 'bg-white text-[#2454C8]' : 'bg-[#F7FAFF] text-gray-500'}`}>
                    {isActive ? '진행' : '보기'}
                  </span>
                </div>
                <p className={`mt-2 text-xs ${isActive ? 'text-[#2454C8]/80' : 'text-gray-500'}`}>{item.description}</p>
              </button>
            )
          })}
        </nav>
      </div>

      <div className="border-t border-[#DCE4F3] p-4">
        <div className="rounded-xl border border-[#DCE4F3] bg-[#F7FAFF] p-3">
          <h3 className="mb-3 text-sm font-semibold text-gray-900">Quick Links</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <div>비교과 프로그램</div>
            <div>동문 커피챗</div>
            <div>교수 오피스아워</div>
            <div>추천 채용 정보</div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#DCE4F3] p-4">
        <h3 className="mb-3 text-sm font-semibold text-gray-900">Build Scope</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>학생 진로/취업 기능만 개발</li>
          <li>example-new 포털 구성 반영</li>
          <li>현재 UI 전체 리팩터링 대상</li>
        </ul>
      </div>
    </aside>
  )
}
