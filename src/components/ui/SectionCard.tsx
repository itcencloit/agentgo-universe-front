import type { PropsWithChildren, ReactNode } from 'react'

type SectionCardProps = PropsWithChildren<{
  eyebrow?: string
  headerRight?: ReactNode
  title: string
}>

export function SectionCard({ children, eyebrow, headerRight, title }: SectionCardProps) {
  return (
    <section className="rounded-md border border-[#d6def0] bg-white shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-4 border-b border-[#e5ecf7] px-5 py-4">
        <div>
          {eyebrow ? <p className="text-xs font-semibold tracking-[0.06em] text-[#7a8699]">{eyebrow}</p> : null}
          <h2 className="mt-1 flex items-center gap-2 text-[18px] font-semibold text-[#37455e]">
            <span className="h-4 w-1 bg-[#4f6da1]" />
            {title}
          </h2>
        </div>
        {headerRight}
      </div>
      <div className="px-5 pb-5">{children}</div>
    </section>
  )
}
