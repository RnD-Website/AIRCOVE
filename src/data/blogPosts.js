// Full article content. Each section: { h, p: [paragraphs], list?: [] }
export const blogCategories = ['All', 'Repair', 'Maintenance', 'Efficiency', 'Buying Guide'];

export const blogPosts = [
  {
    slug: '7-signs-your-ac-needs-professional-repair', title: '7 Signs Your AC Needs Professional Repair', category: 'Repair',
    author: 'Chris Reilly', date: 'JUN 2026', read: 5, image: '/images/blog/blog-1.jpg',
    excerpt: 'Small warning signs often point to bigger problems. Here are seven clues your air conditioner needs a technician.',
    sections: [
      { h: 'Why early warning signs matter', p: ['An air conditioner rarely fails without warning. Most breakdowns begin as small changes in sound, airflow or energy use that are easy to ignore until the system stops on the hottest day of the year.', 'Catching problems early is almost always cheaper. A worn capacitor costs a fraction of a burnt-out compressor, and a clogged drain line is simple to clear before it floods your ceiling.'] },
      { h: 'The seven signs', p: ['If you notice any of the following, it is time to book a professional diagnostic rather than waiting.'], list: ['Warm or weak airflow from the vents', 'Strange noises such as grinding, squealing or clicking', 'Frequent on-off cycling', 'Unusual smells, especially burning or mustiness', 'Water pooling around the indoor unit', 'Rising energy bills with no change in habits', 'Ice forming on the refrigerant lines or coil'] },
      { h: 'What not to do', p: ['Avoid opening the outdoor unit or topping off refrigerant yourself. Refrigerant does not get used up, so low levels mean a leak, and handling it requires EPA certification.', 'It is fine to replace the filter and clear debris from around the outdoor unit. Everything else is best left to a licensed technician.'] },
      { h: 'When to call', p: ['If the system is blowing warm air, leaking or making loud noises, switch it off and call. Running a damaged system can turn a minor repair into a major one.'] },
    ],
  },
  {
    slug: 'how-often-should-you-service-your-air-conditioner', title: 'How Often Should You Service Your Air Conditioner?', category: 'Maintenance',
    author: 'James Kang', date: 'JUN 2026', read: 4, image: '/images/blog/blog-2.jpg',
    excerpt: 'Once a year is the standard, but some homes need more. Here is how to decide on the right schedule.',
    sections: [
      { h: 'The short answer', p: ['Most manufacturers and technicians recommend professional service once a year, ideally in spring before the cooling season begins.', 'If you also use a heat pump or furnace, a second visit in fall keeps the heating side ready for winter.'] },
      { h: 'When to service more often', p: ['Some situations call for extra attention.'], list: ['Homes with pets or heavy dust', 'Properties near construction or open fields', 'Commercial spaces with long daily run times', 'Systems older than ten years'] },
      { h: 'What a tune-up includes', p: ['A proper tune-up includes cleaning the coils, checking refrigerant pressure, testing electrical components, flushing the condensate drain and calibrating the thermostat.', 'You should receive a written report so you can see the condition of your system year over year.'] },
      { h: 'DIY between visits', p: ['Replace the air filter every one to three months, keep the outdoor unit clear of leaves and grass, and make sure vents are not blocked by furniture. These simple habits make professional visits far more effective.'] },
    ],
  },
  {
    slug: 'ac-repair-vs-replacement-which-is-better', title: 'AC Repair vs. Replacement: Which Is Better?', category: 'Buying Guide',
    author: 'Chris Reilly', date: 'MAY 2026', read: 6, image: '/images/blog/blog-3.jpg',
    excerpt: 'A practical framework for deciding whether to fix your air conditioner or invest in a new one.',
    sections: [
      { h: 'Start with age', p: ['Most central air conditioners last 12 to 15 years. If yours is within a few years of that range, major repairs rarely make financial sense.', 'A system under eight years old with a single failed part is almost always worth repairing.'] },
      { h: 'The 5,000 rule', p: ['A common guideline is to multiply the age of the system by the repair cost. If the number is above 5,000, replacement is usually the smarter choice.', 'For example, a 12-year-old unit needing a 500 repair scores 6,000, which points toward replacement.'] },
      { h: 'Other factors to weigh', p: ['Consider more than just the repair estimate.'], list: ['How often you have needed repairs recently', 'Whether the system uses phased-out R-22 refrigerant', 'Your current energy bills compared to a modern system', 'Comfort issues such as noise or uneven cooling'] },
      { h: 'Get an honest comparison', p: ['A good contractor will show you both options with clear pricing. We always quote repair and replacement side by side so the decision is yours, not ours.'] },
    ],
  },
  {
    slug: 'why-is-your-air-conditioner-blowing-warm-air', title: 'Why Is Your Air Conditioner Blowing Warm Air?', category: 'Repair',
    author: 'Mike Davis', date: 'MAY 2026', read: 4, image: '/images/blog/blog-4.jpg',
    excerpt: 'Warm air from your vents has several possible causes. Some are easy to check yourself.',
    sections: [
      { h: 'Check the thermostat first', p: ['Make sure the thermostat is set to cool and the temperature is set below the current room temperature. Dead batteries and incorrect settings cause more service calls than most people expect.'] },
      { h: 'Common causes', p: ['If settings are correct, one of these is usually responsible.'], list: ['A clogged air filter restricting airflow', 'A dirty outdoor condenser coil', 'Low refrigerant caused by a leak', 'A failed capacitor or fan motor', 'A tripped breaker or blown fuse'] },
      { h: 'What you can safely try', p: ['Replace the filter, reset the breaker once, and clear debris around the outdoor unit. If the unit still blows warm air, switch it off to avoid damaging the compressor.'] },
      { h: 'When to call a technician', p: ['Ice on the lines, a hissing sound or a system that trips the breaker again all point to problems that need professional tools and certification.'] },
    ],
  },
  {
    slug: 'how-to-reduce-your-summer-cooling-bills', title: 'How to Reduce Your Summer Cooling Bills', category: 'Efficiency',
    author: 'Chris Reilly', date: 'APR 2026', read: 5, image: '/images/blog/blog-5.jpg',
    excerpt: 'Simple changes that cut cooling costs without sacrificing comfort.',
    sections: [
      { h: 'Set the thermostat smartly', p: ['Every degree you raise the thermostat in summer can reduce cooling costs. A programmable or smart thermostat adjusts automatically while you are away.'] },
      { h: 'Reduce heat entering your home', p: ['Cooling less starts with letting in less heat.'], list: ['Close blinds and curtains on sunny windows', 'Seal gaps around doors and windows', 'Add attic insulation if it is thin', 'Run heat-producing appliances in the evening'] },
      { h: 'Keep your system efficient', p: ['A dirty system works harder. Replace filters regularly, clean around the outdoor unit and schedule an annual tune-up to keep efficiency near its original rating.'] },
      { h: 'Consider an upgrade', p: ['If your system is more than ten years old, a modern high-efficiency model can use significantly less electricity. We provide free estimates that include estimated savings.'] },
    ],
  },
  {
    slug: 'the-benefits-of-regular-hvac-maintenance', title: 'The Benefits of Regular HVAC Maintenance', category: 'Maintenance',
    author: 'James Kang', date: 'APR 2026', read: 4, image: '/images/blog/blog-6.jpg',
    excerpt: 'Why a small annual investment protects comfort, safety and your wallet.',
    sections: [
      { h: 'Fewer breakdowns', p: ['Most emergency calls trace back to worn parts that a tune-up would have caught. Regular service replaces them before they fail.'] },
      { h: 'Lower energy bills', p: ['Clean coils and correct refrigerant levels allow your system to cool with less energy. Neglected systems can lose a noticeable share of their efficiency.'] },
      { h: 'More benefits', p: ['Maintenance delivers value in several ways.'], list: ['Longer equipment lifespan', 'Better indoor air quality', 'Safer heating operation', 'Valid manufacturer warranty', 'Predictable yearly costs'] },
      { h: 'Make it routine', p: ['Schedule service in spring for cooling and fall for heating. Our maintenance visits take under an hour and include a written report.'] },
    ],
  },
  {
    slug: 'common-ac-problems-homeowners-should-know', title: 'Common AC Problems Homeowners Should Know', category: 'Repair',
    author: 'Tony Garcia', date: 'MAR 2026', read: 5, image: '/images/blog/blog-7.jpg',
    excerpt: 'A quick guide to the most frequent air conditioning problems and what causes them.',
    sections: [
      { h: 'Frozen evaporator coil', p: ['Restricted airflow or low refrigerant can cause the coil to freeze. Turn the system off, let it thaw, and check the filter before calling for service.'] },
      { h: 'Clogged condensate drain', p: ['Algae and debris can block the drain line and cause water to back up. Many systems shut off automatically when the drain pan fills.'] },
      { h: 'Other frequent issues', p: ['These problems account for most summer service calls.'], list: ['Failed capacitor preventing startup', 'Refrigerant leaks', 'Dirty condenser coils', 'Faulty thermostat or wiring', 'Worn fan motors and contactors'] },
      { h: 'Prevention', p: ['Annual maintenance, regular filter changes and a clear area around the outdoor unit prevent most of these problems before they begin.'] },
    ],
  },
  {
    slug: 'choosing-the-right-air-conditioning-system', title: 'Choosing the Right Air Conditioning System', category: 'Buying Guide',
    author: 'Chris Reilly', date: 'MAR 2026', read: 7, image: '/images/blog/blog-8.jpg',
    excerpt: 'Central, ductless or heat pump? How to match a system to your home and budget.',
    sections: [
      { h: 'Size matters', p: ['An oversized system cools quickly but cycles on and off, leaving the home humid. An undersized one never keeps up. A proper load calculation is the first step, not a rule of thumb.'] },
      { h: 'Types of systems', p: ['Each option suits different homes.'], list: ['Central air: best for homes with existing ductwork', 'Ductless mini-split: ideal for additions and homes without ducts', 'Heat pump: efficient heating and cooling in one system', 'Packaged units: common in light commercial buildings'] },
      { h: 'Efficiency ratings', p: ['Look at SEER2 for cooling efficiency. Higher ratings cost more upfront but reduce running costs, particularly in hot climates with long cooling seasons.'] },
      { h: 'Get a proper estimate', p: ['Ask for a written, itemized quote and compare options. We offer free in-home estimates with no obligation.'] },
    ],
  },
];
export const getPost = (slug) => blogPosts.find((p) => p.slug === slug);
