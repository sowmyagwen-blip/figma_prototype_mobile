import svgPaths from "../imports/svg-lgz0gzq87v";
import imgRectangle33 from "figma:asset/5ea671f852bdeea1ac35017b6aead2cfdf42a33a.png";
import imgRectangle34 from "figma:asset/8e0716b9eb6d1500655726396280d1fdda74cb66.png";
import imgRectangle35 from "figma:asset/738e6e77a92971e6075b85d18be0de93205d90cb.png";
import imgRectangle36 from "figma:asset/27fe64815d87fe8ff927a6ba43c3295a2c971c0d.png";
import imgRectangle37 from "figma:asset/b564d59ec79f0a62eac0a9b1eaefcfc698a6056c.png";
import imgRectangle38 from "figma:asset/06e0ae99dedf55f8fddbc809c9d8f11b4454081f.png";
import imgRectangle39 from "figma:asset/e1eb9a38a2c6baa99480e75dfd155aa17584f5bb.png";

// Video call button icon
function VideoButton() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <circle cx="20" cy="20" fill="#D5F0FF" r="20" />
        <g clipPath="url(#videoClip)">
          <path
            d={svgPaths.p2ee91c00}
            stroke="#00A3FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.65385"
          />
          <path
            d={svgPaths.p2b4aef00}
            stroke="#00A3FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.65385"
          />
        </g>
        <defs>
          <clipPath id="videoClip">
            <rect
              fill="white"
              height="18.4615"
              transform="translate(10.7692 10.7692)"
              width="18.4615"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Contact row
function ContactRow({
  img,
  name,
  subtitle,
  placeholder = false,
}: {
  img?: string;
  name: string;
  subtitle: string;
  placeholder?: boolean;
}) {
  return (
    <div className="flex items-center gap-[12px] w-full">
      <div className="flex flex-1 gap-[12px] items-center min-w-0">
        <div className="relative rounded-full shrink-0 size-[52px]">
          {placeholder ? (
            <div className="bg-[#d9d9d9] rounded-full size-[52px]" />
          ) : (
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute bg-[#d9d9d9] inset-0 rounded-full" />
              <img
                alt={name}
                className="absolute max-w-none object-cover rounded-full size-full"
                src={img}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-[2px] flex-1 min-w-0">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[22px] overflow-hidden text-[#111] text-[18px] text-ellipsis whitespace-nowrap">
            {name}
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#676767] text-[16px]">
            {subtitle}
          </p>
        </div>
      </div>
      <VideoButton />
    </div>
  );
}

// Status bar
function StatusBar() {
  return (
    <div className="h-[44px] relative shrink-0 w-full bg-white">
      {/* Time */}
      <div className="absolute left-[21px] top-[12px]">
        <p className="font-['SF_Pro_Text:Semibold',sans-serif] font-semibold leading-[20px] text-[#111] text-[15px] tracking-[-0.5px]">
          9:41
        </p>
      </div>
      {/* Right icons */}
      <div className="absolute right-[14px] top-[17px] h-[11px] w-[67px]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 66.6612 11.3359"
        >
          <g>
            <g>
              <path
                d={svgPaths.p2bcf2900}
                opacity="0.35"
                stroke="#000"
              />
              <path
                d={svgPaths.p32eac000}
                fill="#000"
                opacity="0.4"
              />
              <path d={svgPaths.pb5036c0} fill="#000" />
            </g>
            <path
              clipRule="evenodd"
              d={svgPaths.p1d7c8600}
              fill="#000"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3e2de00}
              fill="#000"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Search bar
function SearchBar() {
  return (
    <div className="px-[16px] py-[10px] w-full bg-white">
      <div className="bg-[rgba(118,118,128,0.12)] rounded-[10px] w-full">
        <div className="flex flex-row items-center">
          <div className="flex gap-[6px] items-center px-[8px] py-[7px] w-full">
            <div className="h-[16px] w-[16px] shrink-0">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 15.6304 15.7798"
              >
                <path
                  d={svgPaths.p3c1dac00}
                  fill="rgba(60,60,67,0.6)"
                />
              </svg>
            </div>
            <p className="flex-1 font-['SF_Pro_Text:Regular',sans-serif] leading-[22px] text-[17px] text-[rgba(60,60,67,0.6)] tracking-[-0.408px]">
              Search
            </p>
            <div className="h-[18px] w-[12px] shrink-0">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 11.8784 17.6807"
              >
                <path
                  d={svgPaths.p1fb1e500}
                  fill="rgba(60,60,67,0.6)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab bar (fixed)
function TabBar() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 bg-[rgba(249,249,249,0.94)] backdrop-blur-[10px] shadow-[0px_-0.5px_0px_0px_rgba(0,0,0,0.3)]"
      style={{ zIndex: 100 }}
    >
      <div className="relative h-[49px] w-full">
        {/* Contacts - active */}
        <div className="absolute left-0 top-0 w-1/4 h-full flex flex-col items-center justify-center gap-[2px]">
          <div className="size-[28px] flex items-center justify-center">
            <svg
              fill="none"
              viewBox="0 0 28 28"
              className="size-[28px]"
            >
              <path
                d={svgPaths.p25138f80}
                stroke="#007AFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.33333"
              />
              <path
                d={svgPaths.p1ac9bc00}
                stroke="#007AFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.33333"
              />
            </svg>
          </div>
          <p className="font-['SF_Pro_Text:Medium',sans-serif] text-[#007aff] text-[10px] text-center tracking-[-0.24px]">
            Contacts
          </p>
        </div>
        {/* Keypad */}
        <div className="absolute left-1/4 top-0 w-1/4 h-full flex flex-col items-center justify-center gap-[2px]">
          <div className="size-[28px] flex items-center justify-center">
            <svg
              fill="none"
              viewBox="0 0 28 28"
              className="size-[28px]"
            >
              <path
                d="M4.66667 10.5H23.3333"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.25"
              />
              <path
                d="M4.66667 17.5H23.3333"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.25"
              />
              <path
                d="M11.6667 3.5L9.33333 24.5"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.25"
              />
              <path
                d="M18.6667 3.5L16.3333 24.5"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.25"
              />
            </svg>
          </div>
          <p className="font-['SF_Pro_Text:Medium',sans-serif] text-[#676767] text-[10px] text-center tracking-[-0.24px]">
            Keypad
          </p>
        </div>
        {/* Voicemail */}
        <div className="absolute left-2/4 top-0 w-1/4 h-full flex flex-col items-center justify-center gap-[2px]">
          <div className="size-[28px] flex items-center justify-center">
            <svg
              fill="none"
              viewBox="0 0 28 28"
              className="size-[28px]"
            >
              <path
                d={svgPaths.p3d26e600}
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d={svgPaths.p30e39980}
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M6.41667 18.6667H21.5833"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <p className="font-['SF_Pro_Text:Medium',sans-serif] text-[#676767] text-[10px] text-center tracking-[-0.24px]">
            Voicemail
          </p>
        </div>
        {/* Settings */}
        <div className="absolute left-3/4 top-0 w-1/4 h-full flex flex-col items-center justify-center gap-[2px]">
          <div className="size-[26px] flex items-center justify-center">
            <svg
              fill="none"
              viewBox="0 0 26 26"
              className="size-[26px]"
            >
              <path
                d="M4.33333 22.75V15.1667"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M4.33333 10.8333V3.25"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M13 22.75V13"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M13 8.66667V3.25"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M21.6667 22.75V17.3333"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M21.6667 13V3.25"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M1.08333 15.1667H7.58333"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M9.75 8.66667H16.25"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M18.4167 17.3333H24.9167"
                stroke="#676767"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <p className="font-['SF_Pro_Text:Medium',sans-serif] text-[#676767] text-[10px] text-center tracking-[-0.24px]">
            Settings
          </p>
        </div>
      </div>
      {/* Home indicator */}
      <div className="flex justify-center pb-[8px] pt-[4px]">
        <div className="bg-black h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#1c1c1e] flex items-center justify-center py-10 px-4">
      {/* Phone frame */}
      <div
        className="relative bg-white overflow-hidden"
        style={{
          width: 390,
          height: 844,
          borderRadius: 54,
          boxShadow:
            "0 0 0 12px #3a3a3c, 0 0 0 14px #1c1c1e, 0 30px 80px rgba(0,0,0,0.7)",
        }}
      >
        {/* Status bar - always on top, not part of scroll */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <StatusBar />
        </div>

        {/* Scrollable content area */}
        <div
          className="absolute left-0 right-0 overflow-y-auto bg-white"
          style={{ top: 44, bottom: 83 }}
        >
          {/* Search bar (not sticky - scrolls away) */}
          <SearchBar />

          {/* ── FREQUENTS (sticky) ── */}
          <div className="bg-white sticky top-0 z-10 border-b border-[#d9d9d9]">
            <div className="px-[16px] py-[14px]">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#111] text-[24px]">
                Frequents
              </p>
            </div>
          </div>

          {/* Frequents contacts */}
          <div className="bg-white flex flex-col gap-[24px] px-[16px] pt-[24px] pb-[16px]">
            <ContactRow
              img={imgRectangle33}
              name="Punit Chawla"
              subtitle="2 minutes ago"
            />
            <ContactRow
              img={imgRectangle34}
              name="Richard Jacobs"
              subtitle="24 minutes ago"
            />
            <ContactRow
              img={imgRectangle35}
              name="Daniela Johnson"
              subtitle="2 hours ago"
            />
            <ContactRow
              img={imgRectangle36}
              name="Martin Sraber III."
              subtitle="5 hours ago"
            />
          </div>

          {/* ── FAVORITES (sticky) ── */}
          <div className="bg-white sticky top-0 z-10 border-b border-[#d9d9d9]">
            <div className="px-[16px] py-[14px] flex items-center justify-between">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#111] text-[24px]">
                Favorites
              </p>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="size-[24px]"
              >
                <path
                  d="M12 5V19"
                  stroke="#111"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d="M5 12H19"
                  stroke="#111"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Favorites contacts */}
          <div className="bg-white flex flex-col gap-[24px] px-[16px] pt-[24px] pb-[16px]">
            <ContactRow
              img={imgRectangle37}
              name="Pizza By Alfredo -..."
              subtitle="Favorite"
            />
            <ContactRow
              img={imgRectangle38}
              name="Mom"
              subtitle="Favorite"
            />
            <ContactRow
              img={imgRectangle39}
              name="Kate"
              subtitle="Favorite"
            />
            <ContactRow
              placeholder
              name="Housekeeper Dave"
              subtitle="Favorite"
            />
          </div>

          {/* ── RECENT CONTACTS (sticky) ── */}
          <div className="bg-white sticky top-0 z-10 border-b border-[#d9d9d9]">
            <div className="px-[16px] py-[14px]">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#111] text-[24px]">
                Recent Contacts
              </p>
            </div>
          </div>

          {/* Recent contacts */}
          <div className="bg-white flex flex-col gap-[24px] px-[16px] pt-[24px] pb-[32px]">
            <ContactRow
              img={imgRectangle37}
              name="Pizza By Alfredo -..."
              subtitle="Favorite"
            />
            <ContactRow
              img={imgRectangle38}
              name="Mom"
              subtitle="Favorite"
            />
            <ContactRow
              img={imgRectangle39}
              name="Kate"
              subtitle="Favorite"
            />
            <ContactRow
              placeholder
              name="Housekeeper Dave"
              subtitle="Favorite"
            />
            <ContactRow
              placeholder
              name="Housekeeper Dave"
              subtitle="Favorite"
            />
            <ContactRow
              placeholder
              name="Housekeeper Dave"
              subtitle="Favorite"
            />
            <ContactRow
              placeholder
              name="Housekeeper Dave"
              subtitle="Favorite"
            />
          </div>
        </div>

        {/* Fixed tab bar */}
        <TabBar />

        {/* Notch / Dynamic Island */}
        <div
          className="absolute top-[10px] left-1/2 -translate-x-1/2 bg-black rounded-full z-50"
          style={{ width: 126, height: 34 }}
        />
      </div>
    </div>
  );
}