import { Calendar, Clock, MapPin } from 'lucide-react';

interface HoursRow {
  day?: string;
  hours?: string;
}

interface BookingHoursCardProps {
  eyebrow?: string;
  heading?: string;
  hoursTitle?: string;
  hoursRows?: HoursRow[];
  locationTitle?: string;
  locationValue?: string;
  bookTitle?: string;
  bookSubtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  /** Builder edit mode (Plan 009): wires on-canvas inline editing. Never set in deployed sites. */
  _editable?: boolean;
}

// Trio of local-business info cards: opening hours (day/hours rows), location/address, and a
// standalone "book now" action card. Unlike `content-locator` (a searchable list of many partner
// entries) and the cta-category contact blocks (`contact-split`/`contact-banner`, forms and
// channel links), this is the fixed three-card "when, where, book" strip a single-location
// service business repeats near its footer. Tokens + plan-113 foundation classes only.
export function BookingHoursCard({
  eyebrow, heading, hoursTitle = 'Hours', hoursRows = [], locationTitle = 'Location', locationValue,
  bookTitle = 'Ready to visit?', bookSubtitle, primaryLabel, primaryHref, _editable,
}: BookingHoursCardProps) {
  const editable = (field: string) =>
    _editable ? ({ contentEditable: 'plaintext-only' as const, suppressContentEditableWarning: true, 'data-edit': field }) : {};
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal-stagger mb-12 max-w-2xl">
          {eyebrow && <span className="eyebrow" {...editable('props.eyebrow')}>{eyebrow}</span>}
          {heading && <h2 className="text-h2 text-balance" {...editable('props.heading')}>{heading}</h2>}
        </div>
        <div className="reveal-stagger grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-muted p-7 shadow-soft">
            <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-white">
              <Clock aria-hidden="true" className="size-4.5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground" {...editable('props.hoursTitle')}>{hoursTitle}</h3>
            <ul className="mt-4 flex flex-col gap-1.5 text-sm" {...(_editable ? { 'data-edit-list': 'props.hoursRows' } : {})}>
              {hoursRows.map((row, i) => (
                <li key={i} {...(_editable ? { 'data-edit-item': '' } : {})} className="flex items-center justify-between gap-4 text-foreground/70">
                  <span {...editable(`props.hoursRows.${i}.day`)}>{row.day}</span>
                  <span {...editable(`props.hoursRows.${i}.hours`)}>{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-muted p-7 shadow-soft">
            <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-white">
              <MapPin aria-hidden="true" className="size-4.5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground" {...editable('props.locationTitle')}>{locationTitle}</h3>
            {locationValue && <p className="mt-4 text-sm leading-relaxed text-foreground/70" {...editable('props.locationValue')}>{locationValue}</p>}
          </div>
          <div className="rounded-2xl border border-primary bg-background p-7 shadow-glow">
            <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-white">
              <Calendar aria-hidden="true" className="size-4.5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground" {...editable('props.bookTitle')}>{bookTitle}</h3>
            {bookSubtitle && <p className="mt-2 text-sm text-foreground/70" {...editable('props.bookSubtitle')}>{bookSubtitle}</p>}
            {primaryLabel && (
              <a
                href={primaryHref ?? '#'}
                {...(_editable ? { 'data-edit-link': 'props.primaryHref' } : {})}
                className="hover-lift btn-primary mt-5 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold"
              >
                <span {...editable('props.primaryLabel')}>{primaryLabel}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
