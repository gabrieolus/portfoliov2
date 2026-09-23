import { ArrowUpRight, Check, Mail, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import { BehanceIcon, LinkedInIcon } from './BrandIcons';

const colors = [
  { name: 'Forge Void', token: 'bg-forge-void', hex: '#FFFFFF', darkText: true },
  { name: 'Aether White', token: 'bg-aether-white', hex: '#252525' },
  { name: 'Hextech Green', token: 'bg-hextech-green', hex: '#22A862' },
  { name: 'Matrix Green', token: 'bg-matrix-green', hex: '#1F9658' },
  { name: 'Worn Carbon', token: 'bg-worn-carbon', hex: '#F4F4F5', darkText: true },
];

const typeScale = [
  { name: 'Display 01', className: 'text-4xl md:text-6xl', sample: 'Designing clarity.' },
  { name: 'Display 02', className: 'text-3xl md:text-5xl', sample: 'Systems that scale.' },
  { name: 'Heading', className: 'text-2xl md:text-3xl', sample: 'A purposeful interface' },
  { name: 'Body large', className: 'text-lg md:text-xl font-light', sample: 'Useful products feel simple because the complexity was handled with care.' },
  { name: 'Body', className: 'text-base font-light', sample: 'Every component should communicate hierarchy, state and intent.' },
  { name: 'Eyebrow', className: 'text-[10px] font-bold uppercase tracking-[4px] text-hextech-green', sample: 'Product design' },
];

const sections = [
  ['foundations', 'Foundations'],
  ['typography', 'Typography'],
  ['actions', 'Actions'],
  ['surfaces', 'Surfaces'],
  ['media', 'Media & motion'],
];

function SectionHeader({ index, title, description }: { index: string; title: string; description: string }) {
  return (
    <div className="grid gap-4 border-b border-hextech-green/20 pb-8 md:grid-cols-[120px_1fr]">
      <span className="font-mono text-xs text-hextech-green">{index}</span>
      <div>
        <h2 className="text-3xl md:text-5xl mb-4">{title}</h2>
        <p className="max-w-2xl text-base md:text-lg font-light leading-relaxed text-aether-white/75">{description}</p>
      </div>
    </div>
  );
}

function SpecLabel({ children }: { children: ReactNode }) {
  return <div className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-hextech-green">{children}</div>;
}

export default function Storybook() {
  return (
    <div className="pt-36 pb-24">
      <header className="grid gap-12 pb-24 lg:grid-cols-[1fr_320px] lg:items-end">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-hextech-green/30 bg-hextech-green/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-hextech-green">
            <Sparkles size={13} /> Ghost section · v1.0
          </div>
          <h1 className="max-w-5xl text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Portfolio <span className="text-hextech-green">storybook.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg font-light leading-relaxed text-aether-white/80 md:text-xl">
            A living reference for the visual language, reusable patterns and interaction principles behind gabrielfiore.com.
          </p>
        </div>

        <aside className="glass-surface p-6">
          <SpecLabel>Index</SpecLabel>
          <nav aria-label="Storybook sections" className="space-y-1">
            {sections.map(([id, label], index) => (
              <a key={id} href={`#${id}`} className="group flex items-center justify-between border-b border-black/5 py-3 text-sm transition-colors last:border-0 hover:text-hextech-green">
                <span>{label}</span>
                <span className="font-mono text-[10px] text-aether-white/40 group-hover:text-hextech-green">0{index + 1}</span>
              </a>
            ))}
          </nav>
        </aside>
      </header>

      <section id="foundations" className="scroll-mt-28 py-20">
        <SectionHeader index="01" title="Foundations" description="The smallest decisions that keep every screen recognizable, calm and consistent." />

        <div className="mt-12">
          <SpecLabel>Color system</SpecLabel>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {colors.map((color) => (
              <div key={color.name} className="overflow-hidden rounded-[4px] border border-hextech-green/20">
                <div className={`h-32 ${color.token} ${color.darkText ? 'border-b border-black/5' : ''}`} />
                <div className="flex items-end justify-between gap-4 p-4">
                  <div>
                    <div className="text-sm font-bold">{color.name}</div>
                    <div className="mt-1 font-mono text-[10px] text-aether-white/50">{color.hex}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <SpecLabel>Spacing</SpecLabel>
            <div className="glass-surface space-y-5 p-6 md:p-8">
              {[4, 8, 12, 16, 24, 32, 48, 64].map((space) => (
                <div key={space} className="grid grid-cols-[48px_1fr] items-center gap-5">
                  <span className="font-mono text-[10px] text-aether-white/50">{space}px</span>
                  <div className="h-2 rounded-full bg-hextech-green" style={{ width: `${Math.min(space * 3, 100)}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <SpecLabel>Shape & border</SpecLabel>
            <div className="grid h-[344px] grid-cols-2 gap-4">
              <div className="hextech-border flex items-end rounded-[4px] p-5"><span className="font-mono text-[10px]">RADIUS / 4</span></div>
              <div className="flex items-end rounded-3xl border border-hextech-green/40 p-5"><span className="font-mono text-[10px]">RADIUS / 24</span></div>
              <div className="col-span-2 flex items-center justify-between rounded-[4px] border border-dashed border-hextech-green/50 px-5">
                <span className="font-mono text-[10px]">BORDER / 40%</span>
                <span className="h-px w-1/2 bg-hextech-green" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="typography" className="scroll-mt-28 py-20">
        <SectionHeader index="02" title="Typography" description="Roboto carries both the editorial voice and the product clarity; tracking and weight create the hierarchy." />
        <div className="mt-12 divide-y divide-hextech-green/15 border-y border-hextech-green/15">
          {typeScale.map((type) => (
            <div key={type.name} className="grid gap-5 py-8 md:grid-cols-[150px_1fr] md:items-baseline">
              <div className="font-mono text-[10px] uppercase tracking-wider text-aether-white/45">{type.name}</div>
              <div className={type.className}>{type.sample}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="actions" className="scroll-mt-28 py-20">
        <SectionHeader index="03" title="Actions" description="Controls remain direct and restrained. Green signals the primary path while borders preserve secondary hierarchy." />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="glass-surface p-6 md:p-10">
            <SpecLabel>Buttons</SpecLabel>
            <div className="flex flex-wrap items-center gap-4">
              <button type="button" className="inline-flex items-center gap-3 rounded-full bg-hextech-green px-7 py-3 text-xs font-bold uppercase tracking-[3px] text-forge-void transition-colors hover:bg-matrix-green">
                Primary <ArrowUpRight size={15} />
              </button>
              <button type="button" className="inline-flex items-center gap-3 rounded-full border border-hextech-green px-7 py-3 text-xs font-bold uppercase tracking-[3px] text-hextech-green transition-colors hover:bg-hextech-green hover:text-forge-void">
                Secondary
              </button>
              <button type="button" className="px-4 py-3 text-xs font-bold uppercase tracking-[3px] transition-colors hover:text-hextech-green">
                Text action
              </button>
            </div>
          </div>

          <div className="glass-surface p-6 md:p-10">
            <SpecLabel>States</SpecLabel>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-[4px] border border-hextech-green/30 bg-forge-void px-5 py-4">
                <span className="text-sm">Default state</span><span className="h-2 w-2 rounded-full bg-aether-white/30" />
              </div>
              <div className="flex items-center justify-between rounded-[4px] border border-hextech-green bg-hextech-green/10 px-5 py-4 text-hextech-green">
                <span className="text-sm font-medium">Selected state</span><Check size={16} />
              </div>
              <div className="flex items-center justify-between rounded-[4px] border border-black/5 bg-black/[0.03] px-5 py-4 text-aether-white/35">
                <span className="text-sm">Disabled state</span><span className="font-mono text-[9px]">OFF</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 glass-surface p-6 md:p-10">
          <SpecLabel>Icon actions</SpecLabel>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'LinkedIn', icon: <LinkedInIcon width={17} height={17} /> },
              { label: 'Behance', icon: <BehanceIcon width={20} height={20} /> },
              { label: 'Email', icon: <Mail size={18} /> },
              { label: 'External', icon: <ArrowUpRight size={18} /> },
            ].map((item) => (
              <button key={item.label} type="button" aria-label={item.label} className="group flex h-12 w-12 items-center justify-center rounded-[4px] border border-hextech-green/40 transition-all hover:border-hextech-green hover:bg-hextech-green hover:text-forge-void">
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="surfaces" className="scroll-mt-28 py-20">
        <SectionHeader index="04" title="Surfaces" description="Cards and content blocks use subtle contrast, compact radii and generous whitespace instead of heavy decoration." />
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <article className="glass-surface p-7">
            <SpecLabel>Information card</SpecLabel>
            <h3 className="mb-4 text-2xl font-bold">Structure before polish</h3>
            <p className="font-light leading-relaxed text-aether-white/70">Start with the decision the user needs to make, then shape hierarchy around it.</p>
            <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[3px] text-hextech-green"><Check size={14} /> Principle</div>
          </article>

          <article className="overflow-hidden rounded-[4px] border border-hextech-green/40 md:col-span-1 xl:col-span-2">
            <div className="grid h-full md:grid-cols-[1.2fr_1fr]">
              <img src="/case-assets/KvSm89KT-cover-campaign-builder.png" alt="Campaign Builder case study thumbnail" loading="lazy" decoding="async" className="h-full min-h-56 w-full object-cover" />
              <div className="flex flex-col justify-between p-7 md:p-9">
                <div>
                  <SpecLabel>Project card</SpecLabel>
                  <h3 className="mb-4 text-2xl font-bold">Campaign Builder</h3>
                  <p className="font-light leading-relaxed text-aether-white/70">A modular workflow designed to make complex campaign setup feel clear and adaptable.</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-5 text-xs font-bold uppercase tracking-[2px]">
                  View case <ArrowUpRight size={16} className="text-hextech-green" />
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-[4px] bg-aether-white p-7 text-forge-void md:col-span-2 xl:col-span-1">
            <SpecLabel>Inverted card</SpecLabel>
            <div className="text-5xl font-light">05</div>
            <h3 className="mt-14 text-2xl font-bold">Reusable patterns</h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-forge-void/65">One visual language, applied consistently across the entire experience.</p>
          </article>

          <article className="rounded-[4px] border border-hextech-green/30 p-7 md:col-span-2">
            <SpecLabel>Metric row</SpecLabel>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                ['36', 'Local assets'],
                ['07', 'Prerendered routes'],
                ['01', 'Visual system'],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-hextech-green pl-5">
                  <div className="text-4xl font-light">{value}</div>
                  <div className="mt-2 text-[10px] font-bold uppercase tracking-[3px] text-aether-white/50">{label}</div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="media" className="scroll-mt-28 py-20">
        <SectionHeader index="05" title="Media & motion" description="Images stay proportional, load progressively and use motion only when it communicates product behavior or identity." />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <figure>
            <SpecLabel>Static media · 5:3</SpecLabel>
            <div className="overflow-hidden rounded-[4px] border border-hextech-green/40">
              <img src="/case-assets/13PSSfgt-mainpageblaze.png" alt="Blaze product page design" loading="lazy" decoding="async" className="h-auto w-full" />
            </div>
            <figcaption className="mt-4 font-mono text-[10px] text-aether-white/45">object-fit: contain · intrinsic ratio preserved</figcaption>
          </figure>

          <figure>
            <SpecLabel>Animated media · 16:9</SpecLabel>
            <div className="overflow-hidden rounded-[4px] border border-hextech-green/40">
              <img src="/case-assets/rsvRT9JX-2.gif" alt="Kore rebranding motion sample" loading="lazy" decoding="async" className="h-auto w-full" />
            </div>
            <figcaption className="mt-4 font-mono text-[10px] text-aether-white/45">lazy loading · async decoding · original animation</figcaption>
          </figure>
        </div>
      </section>

      <div className="mt-16 flex flex-col gap-6 rounded-[4px] bg-hextech-green p-8 text-forge-void md:flex-row md:items-center md:justify-between md:p-12">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[3px]">Living reference</div>
          <h2 className="mt-3 text-3xl md:text-5xl">Built to evolve.</h2>
        </div>
        <p className="max-w-xl text-base font-medium leading-relaxed md:text-right">This ghost page documents the system without becoming part of the public portfolio navigation.</p>
      </div>
    </div>
  );
}
