# ATS UI Reference — VoidApply Skin Implementation

> LLM-optimized XML reference for faithfully replicating 13 ATS platforms as parody React/Tailwind skins.
> Based on platform designs as of 2024–2025. Use this as ground truth when building each skin component.

---

```xml
<ats-reference>

  <ats id="workday" parody-id="worknight">
    <real-name>Workday</real-name>
    <colors>
      <primary>#0875e1</primary><!-- Workday blue -->
      <secondary>#ffffff</secondary>
      <accent>#f8a100</accent><!-- orange used sparingly -->
      <background>#f3f3f3</background>
      <nav-bg>#003b5c</nav-bg><!-- dark navy top bar -->
      <text>#333333</text>
      <border>#d0d0d0</border>
    </colors>
    <typography>
      <font-family>Roboto, sans-serif (or generic clean sans)</font-family>
      <feel>Clean, clinical, corporate. Labels are small and grey. Input text is medium weight.</feel>
    </typography>
    <layout type="multi-step-wizard">
      <steps>
        <step n="1">My Information — legal name, address, phone, email, pronouns</step>
        <step n="2">My Experience — work history (add multiple entries)</step>
        <step n="3">Education — degrees, institutions</step>
        <step n="4">Skills — tag-based skill picker</step>
        <step n="5">Resume / CV — upload area (then it asks you to re-enter everything anyway)</step>
        <step n="6">Self-Identify — voluntary EEO/diversity questions</step>
        <step n="7">Review — read-only summary of all answers</step>
        <step n="8">Submit — confirm and submit</step>
      </steps>
      <progress-indicator>Horizontal step list at top. Active step highlighted in blue. Completed steps show checkmark. Non-linear — user can click back to any completed step.</progress-indicator>
    </layout>
    <header>
      <structure>Dark navy bar. Company logo left. "My Applications" and profile icon right. No search.</structure>
    </header>
    <form-fields>
      <field type="text" label="Legal First Name" required="true"/>
      <field type="text" label="Legal Last Name" required="true"/>
      <field type="select" label="Country" required="true"/>
      <field type="text" label="Address Line 1"/>
      <field type="text" label="City"/>
      <field type="text" label="Phone"/>
      <field type="file-upload" label="Resume/CV" note="Also accepts LinkedIn profile URL"/>
      <field type="textarea" label="Cover Letter (optional)"/>
      <field type="yes-no" label="Are you legally authorized to work in [country]?"/>
      <field type="yes-no" label="Will you now or in the future require sponsorship?"/>
    </form-fields>
    <distinctive-quirks>
      <quirk>Progress bar has 8+ steps for what should be a 2-minute form</quirk>
      <quirk>Uploads resume then asks you to manually enter everything from it</quirk>
      <quirk>Required fields use asterisk (*) but the asterisk is tiny and grey</quirk>
      <quirk>"Save for Later" button on every step — implying you'll need it</quirk>
      <quirk>Session timeout warning appears randomly mid-form</quirk>
      <quirk>EEO questions framed as "voluntary" but take up an entire step</quirk>
      <quirk>Back button does not always preserve entered data</quirk>
    </distinctive-quirks>
    <overall-feel>Bureaucratic HR software trying to look modern. Feels like filing taxes.</overall-feel>
  </ats>

  <ats id="greenhouse" parody-id="greenhouse-of-pain">
    <real-name>Greenhouse</real-name>
    <colors>
      <primary>#24a47f</primary><!-- Greenhouse green -->
      <secondary>#ffffff</secondary>
      <accent>#24a47f</accent>
      <background>#ffffff</background>
      <nav-bg>#ffffff</nav-bg>
      <text>#1a1a1a</text>
      <border>#e5e5e5</border>
      <label-color>#6c737a</label-color>
    </colors>
    <typography>
      <font-family>Inter, system-ui, sans-serif</font-family>
      <feel>Modern, clean, well-spaced. Labels above inputs. Comfortable line height. Feels like a well-designed SaaS product.</feel>
    </typography>
    <layout type="single-long-form">
      <sections>
        <section>Basic Information (name, email, phone, location)</section>
        <section>Resume/CV upload</section>
        <section>LinkedIn / Portfolio / Website URLs</section>
        <section>Custom Questions (varies per job — often 3-8 questions)</section>
        <section>Voluntary Demographic Questions (EEO)</section>
      </sections>
      <progress-indicator>None visible — single scrolling page with clear section headings.</progress-indicator>
    </layout>
    <header>
      <structure>Company logo and name at top left. Job title and location as page heading. Clean white header. Small "Powered by Greenhouse" badge bottom right.</structure>
    </header>
    <form-fields>
      <field type="text" label="First Name" required="true"/>
      <field type="text" label="Last Name" required="true"/>
      <field type="email" label="Email" required="true"/>
      <field type="tel" label="Phone"/>
      <field type="text" label="Current Location (City)"/>
      <field type="file-upload" label="Resume/CV" note="PDF, DOC, DOCX up to 5MB"/>
      <field type="url" label="LinkedIn Profile"/>
      <field type="url" label="Portfolio/Website"/>
      <field type="select" label="How did you hear about us?"/>
    </form-fields>
    <distinctive-quirks>
      <quirk>Deceptively simple layout — then custom questions section appears with oddly specific queries</quirk>
      <quirk>Small "We use AI to review applications" disclaimer sometimes present</quirk>
      <quirk>Demographic section asks very detailed questions (race, gender, disability, veteran status)</quirk>
      <quirk>"Powered by Greenhouse" branding is subtle but present</quirk>
      <quirk>File upload sometimes says "Drag and drop or click to upload" but drag-and-drop is broken</quirk>
      <quirk>Submit button is green and prominent — the only green element on the page</quirk>
    </distinctive-quirks>
    <overall-feel>Clean, modern, polished. The nice-looking ATS that still rejects you instantly.</overall-feel>
  </ats>

  <ats id="workable" parody-id="rejectable">
    <real-name>Workable</real-name>
    <colors>
      <primary>#ff4940</primary><!-- Workable coral-red — used on CTA/submit button -->
      <secondary>#ffffff</secondary>
      <accent>#ff4940</accent>
      <background>#f7f7f7</background>
      <nav-bg>#ffffff</nav-bg>
      <text>#1a1a1a</text>
      <border>#d1d5db</border>
    </colors>
    <typography>
      <font-family>Inter, Helvetica Neue, sans-serif</font-family>
      <feel>Friendly and approachable. Rounded inputs. Good spacing. Modern B2B SaaS aesthetic.</feel>
    </typography>
    <layout type="card-sections">
      <cards>
        <card>Personal Details</card>
        <card>Resume</card>
        <card>Cover Letter</card>
        <card>Profile Links</card>
        <card>Screening Questions</card>
      </cards>
      <progress-indicator>No numbered steps. Cards stack vertically. Each card has a header with section title.</progress-indicator>
    </layout>
    <header>
      <structure>Company logo and name. Job title. "Apply for this position" heading. Teal accent line or button. Small Workable attribution at bottom.</structure>
    </header>
    <form-fields>
      <field type="text" label="Full Name" required="true"/>
      <field type="email" label="Email address" required="true"/>
      <field type="tel" label="Phone"/>
      <field type="text" label="Current company"/>
      <field type="text" label="Current job title"/>
      <field type="file-upload" label="Resume" note="PDF or Word, max 5MB"/>
      <field type="textarea" label="Cover letter"/>
      <field type="url" label="LinkedIn"/>
      <field type="url" label="GitHub"/>
      <field type="url" label="Portfolio"/>
    </form-fields>
    <distinctive-quirks>
      <quirk>Has a live chat widget in the corner that says "Typically replies in 3-5 business days"</quirk>
      <quirk>Screening questions section often has oddly binary yes/no questions</quirk>
      <quirk>Apply button is green — contrasts with teal branding</quirk>
      <quirk>Sometimes shows "X people applied" counter but the number is suspiciously high</quirk>
      <quirk>Resume upload area shows a large dashed border zone</quirk>
      <quirk>Optional fields have "(optional)" label in grey — most fields are optional</quirk>
    </distinctive-quirks>
    <overall-feel>Clean and friendly. The ATS that looks like it was built by people who actually care about UX.</overall-feel>
  </ats>

  <ats id="taleo" parody-id="talaeo">
    <real-name>Oracle Taleo</real-name>
    <colors>
      <primary>#005b99</primary><!-- Taleo portal blue (not Oracle's brand red — that's corporate marketing only) -->
      <secondary>#ffffff</secondary>
      <accent>#0066cc</accent><!-- link/active color -->
      <background>#f5f5f5</background>
      <nav-bg>#333333</nav-bg><!-- dark grey top bar -->
      <table-row-alt>#f9f9f9</table-row-alt>
      <text>#333333</text>
      <border>#cccccc</border>
      <required-asterisk>#cc0000</required-asterisk><!-- error/required red -->
      <error>#cc0000</error>
    </colors>
    <typography>
      <font-family>Arial, Helvetica, sans-serif</font-family>
      <feel>Early 2010s enterprise. Small, dense text. Labels to the LEFT of inputs (not above). Fixed-width layout feeling. Nothing is quite aligned.</feel>
    </typography>
    <layout type="multi-step-wizard-legacy">
      <steps>
        <step n="1">Registration / Login (must create account first)</step>
        <step n="2">My Profile — personal info</step>
        <step n="3">Resume upload OR manual entry</step>
        <step n="4">Work Experience (table-based entry form)</step>
        <step n="5">Education (table-based entry form)</step>
        <step n="6">Screening Questions</step>
        <step n="7">Certifications / Licenses</step>
        <step n="8">Review and Submit</step>
      </steps>
      <progress-indicator>Horizontal numbered tabs or a "Step X of Y" text indicator. Tabs look like Windows XP-era browser tabs.</progress-indicator>
    </layout>
    <header>
      <structure>Grey/dark top bar. Oracle or company logo. Navigation links. Session timeout counter visible. "Help" link that leads nowhere useful.</structure>
    </header>
    <form-fields>
      <field type="text" label="First Name *" note="Asterisk is red"/>
      <field type="text" label="Last Name *"/>
      <field type="text" label="Middle Name"/>
      <field type="email" label="Email Address *"/>
      <field type="password" label="Password *" note="Password must be 8+ chars, 1 uppercase, 1 number, 1 special — but & and @ are NOT allowed"/>
      <field type="text" label="Social Security Number (last 4)" note="Sometimes asked early in flow"/>
      <field type="select" label="Citizenship Status *"/>
      <field type="select" label="Have you previously applied to this company?"/>
      <field type="radio" label="How did you hear about this position?"/>
    </form-fields>
    <distinctive-quirks>
      <quirk>Session timeout banner counts down from 15 or 20 minutes. Refreshing resets it but navigating sometimes does not.</quirk>
      <quirk>Must create a full account BEFORE seeing any application fields</quirk>
      <quirk>Password has contradictory rules — common symbols rejected after being required</quirk>
      <quirk>Table-based form for work history — each job is a separate row that opens a popup form</quirk>
      <quirk>Back button in browser breaks the session and loses all data</quirk>
      <quirk>Random red asterisks on fields that turn out not to be required</quirk>
      <quirk>Entire form width is fixed at ~800px — looks broken on modern wide screens</quirk>
      <quirk>Error messages appear at the TOP of the page, not next to the field</quirk>
      <quirk>Required to enter start AND end date for every job, using separate month/year dropdowns</quirk>
      <quirk>"Save Draft" button exists but reliably loses data on some browsers</quirk>
    </distinctive-quirks>
    <overall-feel>Enterprise software from 2008 that received one coat of CSS paint in 2014 and has not been touched since.</overall-feel>
  </ats>

  <ats id="lever" parody-id="lever-to-nowhere">
    <real-name>Lever</real-name>
    <colors>
      <primary>#5b2be0</primary><!-- Lever purple -->
      <secondary>#ffffff</secondary>
      <accent>#5b2be0</accent>
      <background>#ffffff</background>
      <nav-bg>#ffffff</nav-bg>
      <text>#1a1a2e</text>
      <border>#e0e0e0</border>
      <placeholder>#9ca3af</placeholder>
    </colors>
    <typography>
      <font-family>-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif</font-family>
      <feel>Very clean, minimal, almost brutalist in its simplicity. Generous whitespace. Feels like a well-funded startup's internal tool.</feel>
    </typography>
    <layout type="two-column">
      <description>LEFT column: sticky sidebar with company logo, job title, location, department, and full job description. RIGHT column: the application form. Both visible simultaneously — you see the job while you apply. The form itself appears short at first, then "Additional Information" accordion expands to reveal many more fields.</description>
      <sections>
        <section>Basic (name, email, phone, resume)</section>
        <section>Social (LinkedIn, GitHub, portfolio)</section>
        <section>Additional Information (expands — 10-15 more fields)</section>
        <section>Voluntary Self-Identification</section>
      </sections>
    </layout>
    <header>
      <structure>Very minimal. Company name/logo at top. Job title. Location and type badges. "Apply" heading. No distracting nav.</structure>
    </header>
    <form-fields>
      <field type="text" label="Full name *"/>
      <field type="email" label="Email *"/>
      <field type="tel" label="Phone"/>
      <field type="file-upload" label="Resume/CV *"/>
      <field type="url" label="LinkedIn"/>
      <field type="url" label="GitHub"/>
      <field type="url" label="Portfolio/website"/>
      <field type="textarea" label="Additional information" note="Free text — no label guidance"/>
    </form-fields>
    <distinctive-quirks>
      <quirk>Initial form looks deceptively short — 5-6 fields maximum visible</quirk>
      <quirk>Additional Information section unfolds with 10-15 extra fields after initial load or on interaction</quirk>
      <quirk>Some companies add custom questions that balloon the form significantly</quirk>
      <quirk>Purple CTA button is the only colour on the page</quirk>
      <quirk>Very minimal header — no progress indicator, no step count, no reassurance</quirk>
      <quirk>Confirmation page is plain white with just a text confirmation — no animation, no fanfare</quirk>
    </distinctive-quirks>
    <overall-feel>Deceptively minimal. The ATS that looks like it respects your time — until the form expands.</overall-feel>
  </ats>

  <ats id="linkedin-easy-apply" parody-id="linked-out">
    <real-name>LinkedIn Easy Apply</real-name>
    <colors>
      <primary>#0a66c2</primary><!-- LinkedIn blue -->
      <secondary>#ffffff</secondary>
      <accent>#0a66c2</accent>
      <background>#f3f2ef</background><!-- LinkedIn page bg -->
      <card-bg>#ffffff</card-bg>
      <nav-bg>#ffffff</nav-bg>
      <text>#000000</text>
      <secondary-text>#666666</secondary-text>
      <border>#e0e0e0</border>
      <easy-apply-badge-bg>#0a66c2</easy-apply-badge-bg>
    </colors>
    <typography>
      <font-family>-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", sans-serif</font-family>
      <feel>Corporate but approachable. LinkedIn's established design system. Medium density. Lots of bold for emphasis.</feel>
    </typography>
    <layout type="multi-step-modal">
      <description>A modal/sidebar slides in over the job listing. Steps are numbered. Each step has a few fields. Progress bar at top of modal.</description>
      <steps>
        <step n="1">Contact Info (auto-filled from profile — name, email, phone, location)</step>
        <step n="2">Resume (select existing or upload new)</step>
        <step n="3">Screening Questions (yes/no eligibility)</step>
        <step n="4">Work Authorization (are you authorized? require sponsorship?)</step>
        <step n="5">Additional Questions (varies widely — often 10-20 custom questions)</step>
        <step n="6">Review (read-only summary)</step>
        <step n="7">Submit</step>
      </steps>
      <progress-indicator>Linear progress bar at top of modal. "Step X of Y" text. Y changes as you proceed (they add steps).</progress-indicator>
    </layout>
    <header>
      <structure>Full job page with company banner, company logo, job title, company name, location. "Easy Apply" button with lightning bolt icon prominently placed. Applicant count shown ("1,247 applicants").</structure>
    </header>
    <distinctive-quirks>
      <quirk>Shows applicant count that increments — psychological pressure mechanism</quirk>
      <quirk>"Easy Apply" branding is bold and prominent but the form is not easy</quirk>
      <quirk>Step count is not fixed — new steps appear as you progress</quirk>
      <quirk>Pre-fills from your LinkedIn profile but gets things wrong (wrong phone, old location)</quirk>
      <quirk>Asks work authorization questions even for local candidates</quirk>
      <quirk>Some custom question steps have 10-15 questions each</quirk>
      <quirk>Closing the modal without submitting shows a warning but the data is still lost</quirk>
      <quirk>Confirmation shows "Application sent to [Company]" but no email confirmation ever arrives</quirk>
      <quirk>Sometimes the job was posted months ago and the listing is already closed</quirk>
      <quirk>Salary expectations field — no guidance on range — always asked</quirk>
    </distinctive-quirks>
    <overall-feel>A trusted platform's broken promise. The "Easy Apply" is marketing, not reality.</overall-feel>
  </ats>

  <ats id="icims" parody-id="icantms">
    <real-name>iCIMS</real-name>
    <colors>
      <primary>#0066cc</primary><!-- iCIMS blue -->
      <secondary>#ffffff</secondary>
      <accent>#00a3e0</accent><!-- lighter process blue -->
      <background>#f4f4f4</background>
      <nav-bg>#0066cc</nav-bg>
      <text>#2c2c2c</text>
      <border>#cccccc</border>
      <error>#d0021b</error>
    </colors>
    <typography>
      <font-family>Open Sans, Arial, sans-serif</font-family>
      <feel>Enterprise corporate. Dense. Functional, not beautiful. Labels above inputs but sometimes beside. Inconsistent throughout.</feel>
    </typography>
    <layout type="multi-step-wizard-enterprise">
      <steps>
        <step n="1">Account Registration (mandatory before application)</step>
        <step n="2">Personal Information</step>
        <step n="3">Resume Upload (then parsing fails silently)</step>
        <step n="4">Work Experience (manual re-entry)</step>
        <step n="5">Education</step>
        <step n="6">Skills and Certifications</step>
        <step n="7">Application Questions</step>
        <step n="8">EEO / Voluntary Disclosure</step>
        <step n="9">E-Sign and Submit</step>
      </steps>
      <progress-indicator>Step numbers shown as breadcrumb or tab-style navigation. Active step highlighted. Completed steps may or may not show checkmark.</progress-indicator>
    </layout>
    <header>
      <structure>Deep blue top bar. Company logo. "Careers" branding. User account link. Often has a secondary nav bar with "Job Search | My Applications | My Profile".</structure>
    </header>
    <form-fields>
      <field type="text" label="First Name *"/>
      <field type="text" label="Last Name *"/>
      <field type="email" label="Email *" note="Also used as username"/>
      <field type="password" label="Password *" note="Must contain symbol, but @ is not allowed — not stated anywhere"/>
      <field type="password" label="Confirm Password *"/>
      <field type="text" label="Security Question Answer *"/>
      <field type="file-upload" label="Resume" note="Upload initiates 8-second 'AI parsing' spinner; result is all fields blank"/>
      <field type="tel" label="Phone"/>
      <field type="text" label="Current Employer"/>
      <field type="text" label="Current Title"/>
      <field type="select" label="Employment Type Desired"/>
      <field type="select" label="Available Start Date"/>
    </form-fields>
    <distinctive-quirks>
      <quirk>Mandatory account creation BEFORE seeing any application — email verification required</quirk>
      <quirk>Password rules shown but include hidden forbidden characters (@ symbol)</quirk>
      <quirk>Resume "AI parsing" spinner runs ~8 seconds then leaves all fields blank</quirk>
      <quirk>Submit button is greyed out with no explanation why — one hidden validation failure somewhere</quirk>
      <quirk>Error messages are vague: "Please correct errors before continuing" — does not highlight the field</quirk>
      <quirk>Frequently used by Fortune 100 companies (P&G, Walmart, etc.) — unavoidable</quirk>
      <quirk>Success page shows only a reference number (REQ-2024-XXXXXX-A) and nothing else</quirk>
      <quirk>Session timeout after 20 minutes — loses all data</quirk>
      <quirk>Some fields have character limits not shown until you hit them</quirk>
    </distinctive-quirks>
    <overall-feel>The most frustrating ATS in existence. Used by the largest companies. Completely unavoidable.</overall-feel>
  </ats>

  <ats id="ashby" parody-id="ashbye-hq">
    <real-name>AshbyHQ</real-name>
    <colors>
      <primary>#000000</primary><!-- black / near-black CTAs -->
      <secondary>#ffffff</secondary>
      <accent>#6366f1</accent><!-- subtle indigo, used minimally -->
      <background>#ffffff</background>
      <nav-bg>#ffffff</nav-bg>
      <text>#111111</text>
      <secondary-text>#6b7280</secondary-text>
      <border>#f0f0f0</border><!-- very light borders -->
    </colors>
    <typography>
      <font-family>Inter, system-ui, sans-serif</font-family>
      <feel>Ruthlessly minimal. Generous whitespace. Small, precise labels. Everything is tasteful and slightly cold. Beloved by Series B startups.</feel>
    </typography>
    <layout type="single-clean-form">
      <sections>
        <section>Basic Information</section>
        <section>Resume (upload or paste)</section>
        <section>Links (LinkedIn, portfolio)</section>
        <section>Custom Questions (usually 1-3 thoughtful questions)</section>
        <section>Voluntary Demographics</section>
      </sections>
      <progress-indicator>None — single page, no steps. Optional pipeline stage sidebar shows "Applied → Review → Interview → Offer".</progress-indicator>
    </layout>
    <header>
      <structure>Very clean. Company name (sometimes with logo). Job title in large font. Department, location, type as small tags/badges. No chrome.</structure>
    </header>
    <form-fields>
      <field type="text" label="First name *"/>
      <field type="text" label="Last name *"/>
      <field type="email" label="Email *"/>
      <field type="tel" label="Phone (optional)"/>
      <field type="file-upload" label="Resume" note="Clean drag-and-drop zone"/>
      <field type="url" label="LinkedIn (optional)"/>
      <field type="url" label="Portfolio (optional)"/>
      <field type="textarea" label="Why do you want to work here?" note="10,000 char limit; anything over 500 triggers 'Please be concise' validation"/>
    </form-fields>
    <sidebar>
      <element>Pipeline stage tracker: Applied → Review → Interview → Offer (with dots/connectors). Freezes at "Review" indefinitely.</element>
    </sidebar>
    <distinctive-quirks>
      <quirk>Almost no visual chrome — easy to mistake for a custom company form</quirk>
      <quirk>Pipeline tracker is a lie — it never advances past "Review"</quirk>
      <quirk>Custom questions are often a single field with a very long character limit that punishes long answers</quirk>
      <quirk>Submit button is black — stark, confident, unnerving</quirk>
      <quirk>Rejection email is warmly worded with zero personal details: "Hi Candidate," not your name</quirk>
      <quirk>Ashby logo is very small at the bottom — they try not to advertise themselves loudly</quirk>
      <quirk>Used by tech-forward VC-backed companies — gives false hope that the company is well-run</quirk>
    </distinctive-quirks>
    <overall-feel>The ATS that makes you think you're being treated as a human. You are not.</overall-feel>
  </ats>

  <ats id="teamtailor" parody-id="teamfailor">
    <real-name>Teamtailor</real-name>
    <colors>
      <primary>#4ac4a1</primary><!-- Teamtailor's own teal/mint brand color -->
      <secondary>#ffffff</secondary>
      <accent>#4ac4a1</accent><!-- platform is white-labeled, company picks accent colour — this is Teamtailor's default -->
      <background>#ffffff</background>
      <nav-bg>#ffffff</nav-bg>
      <text>#1f2937</text>
      <secondary-text>#6b7280</secondary-text>
      <border>#e5e7eb</border>
    </colors>
    <typography>
      <font-family>Inter, or company-specified font, sans-serif</font-family>
      <feel>Scandinavian minimalist. Very branded to the company. High-quality photography. Culture-first aesthetic. Feels like a premium career page product.</feel>
    </typography>
    <layout type="branded-career-page-with-apply-modal">
      <description>Full career page with hero image/video, team culture section, company values. Job listing has "Apply" button. Apply opens a clean form — either inline or modal.</description>
      <sections>
        <section>Hero: Full-bleed company culture photo or video</section>
        <section>About the role (markdown-rendered job description)</section>
        <section>About the company (culture photos, team bios)</section>
        <section>Application form (at bottom or in modal)</section>
      </sections>
    </layout>
    <header>
      <structure>Company logo. Full-bleed culture photo. Job title overlay. "Meet the Team" video often embedded before the apply CTA unlocks.</structure>
    </header>
    <form-fields>
      <field type="text" label="First name *"/>
      <field type="text" label="Last name *"/>
      <field type="email" label="Email *"/>
      <field type="tel" label="Phone"/>
      <field type="file-upload" label="Resume"/>
      <field type="textarea" label="Cover letter"/>
      <field type="url" label="LinkedIn"/>
      <field type="custom" label="Custom questions (varies by company)"/>
    </form-fields>
    <distinctive-quirks>
      <quirk>Social login (LinkedIn, Google, Facebook) shown prominently at TOP of application form — more prominent than the manual form fields</quirk>
      <quirk>Full-bleed culture photography gives false impression of being a great place to work</quirk>
      <quirk>Some implementations require watching an auto-playing video before Apply button activates</quirk>
      <quirk>Application status shown as a coloured dot (green/yellow) in candidate portal — dot never changes</quirk>
      <quirk>Footer claims "We aim to respond within 5 business days" — no response ever arrives</quirk>
      <quirk>The entire aesthetic is aspirational and warm — makes the rejection more jarring</quirk>
      <quirk>Platform is white-labeled well — many candidates don't know it's Teamtailor</quirk>
      <quirk>Heavily used by Scandinavian tech companies and European startups</quirk>
    </distinctive-quirks>
    <overall-feel>The most beautiful ATS. The rejection still stings more because you wanted to work there.</overall-feel>
  </ats>

  <ats id="smartrecruiters" parody-id="dumb-recruiters">
    <real-name>SmartRecruiters</real-name>
    <colors>
      <primary>#1565c0</primary><!-- SmartRecruiters blue -->
      <secondary>#ffffff</secondary>
      <accent>#0288d1</accent>
      <background>#ffffff</background>
      <nav-bg>#1565c0</nav-bg>
      <text>#212121</text>
      <border>#e0e0e0</border>
      <success>#2e7d32</success>
    </colors>
    <typography>
      <font-family>Roboto, Arial, sans-serif</font-family>
      <feel>Corporate-modern. Heavier use of blue. Card-based sections. Feels like a Google product from 2017.</feel>
    </typography>
    <layout type="single-page-with-sections">
      <sections>
        <section>Personal Info</section>
        <section>Resume Upload</section>
        <section>Screening Questions</section>
        <section>Additional Questions</section>
      </sections>
      <progress-indicator>No traditional progress bar on the candidate-facing form. Some implementations show step count.</progress-indicator>
    </layout>
    <header>
      <structure>Blue top bar with company name/logo. "Careers" nav. Job title as page heading. "Apply Now" CTA. "AI-Powered Hiring" badge or tagline sometimes visible on the company's careers page.</structure>
    </header>
    <form-fields>
      <field type="text" label="First Name *"/>
      <field type="text" label="Last Name *"/>
      <field type="email" label="Email *"/>
      <field type="tel" label="Phone *"/>
      <field type="text" label="Location"/>
      <field type="file-upload" label="Resume *"/>
      <field type="url" label="LinkedIn"/>
      <field type="select" label="Years of Experience"/>
      <field type="radio" label="Are you legally eligible to work?" required="true"/>
    </form-fields>
    <distinctive-quirks>
      <quirk>Prominently markets "AI-Powered" screening on every screen</quirk>
      <quirk>Confirmation page includes a QR code that links to the company homepage — no useful info</quirk>
      <quirk>SmartRecruiters branding is heavy on careers portal pages</quirk>
      <quirk>Screening questions are often cut-and-paste from a template — weirdly mismatched to the role</quirk>
      <quirk>The AI matching score is mentioned but never shown to candidates</quirk>
      <quirk>Some implementations have a very long processing time on submit (5-10s spinner)</quirk>
    </distinctive-quirks>
    <overall-feel>Corporate-modern. Proclaims AI capabilities prominently. Delivers standard ATS behaviour.</overall-feel>
  </ats>

  <ats id="bamboohr" parody-id="bamboom">
    <real-name>BambooHR</real-name>
    <colors>
      <primary>#73ac3a</primary><!-- BambooHR green -->
      <secondary>#ffffff</secondary>
      <accent>#5d9130</accent><!-- darker green -->
      <background>#f8faf4</background><!-- very light warm green-white -->
      <nav-bg>#ffffff</nav-bg>
      <text>#333333</text>
      <secondary-text>#666666</secondary-text>
      <border>#dce8cc</border><!-- green-tinted border -->
    </colors>
    <typography>
      <font-family>"BambooHR" custom font or Source Sans Pro, sans-serif</font-family>
      <feel>Warm, approachable, friendly. HR software that wants to be liked. Feels like it was designed by someone who owns indoor plants. Slightly more rounded than typical enterprise software.</feel>
    </typography>
    <layout type="clean-single-form">
      <description>Simple, clean form. Not overly long. Company branding at top with optional culture photos. Wholesome feel throughout.</description>
      <sections>
        <section>Personal Information</section>
        <section>Resume</section>
        <section>Application Questions</section>
        <section>Availability / Start Date</section>
      </sections>
    </layout>
    <header>
      <structure>Company logo. Job title. Location. Type. Salary (sometimes). Small green bamboo leaf or plant iconography. "Apply" button is prominently green.</structure>
    </header>
    <form-fields>
      <field type="text" label="First Name *"/>
      <field type="text" label="Last Name *"/>
      <field type="email" label="Email *"/>
      <field type="tel" label="Phone *"/>
      <field type="text" label="Address"/>
      <field type="file-upload" label="Resume"/>
      <field type="textarea" label="Cover Letter (optional)"/>
      <field type="select" label="How did you hear about this opening?"/>
      <field type="select" label="Desired Start Date"/>
      <field type="textarea" label="How do you like to receive feedback?" note="Warm HR question — answer goes nowhere"/>
      <field type="textarea" label="Describe your ideal manager in three words"/>
    </form-fields>
    <distinctive-quirks>
      <quirk>HR-flavored questions like "ideal manager" and "feedback style" that have no impact on the outcome</quirk>
      <quirk>Friendly, warm copy throughout — "Thank you for your interest in joining our team!"</quirk>
      <quirk>Illustrated people or plant imagery in the UI</quirk>
      <quirk>Completion screen is warm and enthusiastic: "Your application has been received! We're excited to learn more about you."</quirk>
      <quirk>Then immediately auto-rejects you in the same visual language</quirk>
      <quirk>"BambooHR" branding is present but understated — appears in footer as "Powered by BambooHR"</quirk>
    </distinctive-quirks>
    <overall-feel>Warm, green, and friendly. Makes you feel good about applying. Makes the rejection worse.</overall-feel>
  </ats>

  <ats id="jobvite" parody-id="jobvoid">
    <real-name>Jobvite</real-name>
    <colors>
      <primary>#e31837</primary><!-- Jobvite red -->
      <secondary>#ffffff</secondary>
      <accent>#e31837</accent>
      <background>#f5f5f5</background>
      <nav-bg>#ffffff</nav-bg>
      <text>#333333</text>
      <border>#dddddd</border>
      <link>#e31837</link>
    </colors>
    <typography>
      <font-family>Open Sans, Arial, sans-serif</font-family>
      <feel>Mid-tier enterprise. Not as bad as Taleo, not as good as Greenhouse. Functional. The font is fine. The layout is fine. Nothing is memorable.</feel>
    </typography>
    <layout type="single-page-legacy-modern">
      <description>Single page form. Sections delineated by grey headers. Has been modernized but original bones show. Social login options present.</description>
      <sections>
        <section>Personal Info</section>
        <section>Resume</section>
        <section>Social Profiles</section>
        <section>Custom Questions</section>
        <section>Referral / How did you hear</section>
      </sections>
    </layout>
    <header>
      <structure>Company name and logo. Red accent. Job title. "Apply Now" CTA. "Social Apply" buttons (LinkedIn / Indeed apply) prominently featured — clicking still ends in rejection.</structure>
    </header>
    <form-fields>
      <field type="text" label="First Name *"/>
      <field type="text" label="Last Name *"/>
      <field type="email" label="Email *"/>
      <field type="tel" label="Phone"/>
      <field type="file-upload" label="Resume" note="Or apply with LinkedIn / Indeed"/>
      <field type="textarea" label="Cover Letter"/>
      <field type="url" label="LinkedIn Profile"/>
      <field type="select" label="How did you hear about this job?"/>
    </form-fields>
    <sidebar-activity>
      <element>Sometimes shows recruiter activity: "Sarah (Recruiter) viewed your profile · 3 minutes ago" — then: "Sarah (Recruiter) is no longer with the company."</element>
    </sidebar-activity>
    <distinctive-quirks>
      <quirk>"Social Apply" feature prominently advertised — still rejects you the same way</quirk>
      <quirk>Email confirmation arrives immediately with a reference number and nothing else</quirk>
      <quirk>Reference numbers are long and formatted like JV-XXXXXXXX — professional looking but meaningless</quirk>
      <quirk>Recruiter activity feed in sidebar (some implementations) — psychological false engagement signal</quirk>
      <quirk>UI feels like it was modern in 2016 and hasn't changed</quirk>
      <quirk>Red is used for branding but also for errors — confusing</quirk>
    </distinctive-quirks>
    <overall-feel>Mid-tier enterprise software that peaked around 2016. The ATS you encounter without expecting to.</overall-feel>
  </ats>

  <ats id="hibob" parody-id="byebob">
    <real-name>HiBob</real-name>
    <colors>
      <primary>#ff5a5f</primary><!-- HiBob coral/red-pink -->
      <secondary>#ffffff</secondary>
      <accent>#ffd166</accent><!-- yellow accent -->
      <background>#ffffff</background>
      <nav-bg>#ffffff</nav-bg>
      <text>#1a1a1a</text>
      <secondary-text>#6b7280</secondary-text>
      <border>#e5e7eb</border>
      <illustration-colors>coral, yellow, mint green</illustration-colors>
    </colors>
    <typography>
      <font-family>Circular, Nunito, or similar friendly rounded sans</font-family>
      <feel>Startup-friendly, casual, warm. Rounded everything. Illustrations of diverse cartoon people. "HR but make it fun." Copy uses first names and informal language.</feel>
    </typography>
    <layout type="friendly-card-form">
      <description>Friendly, card-based, casual form. Copy uses "Hey 👋" style openers. Short sections. Feels like a consumer app, not enterprise software.</description>
      <sections>
        <section>Welcome (casual greeting)</section>
        <section>About You (basic info)</section>
        <section>Your Experience (resume + work history)</section>
        <section>Let's Chat (custom questions, phrased casually)</section>
      </sections>
    </layout>
    <header>
      <structure>Company logo. Colourful header with illustration. Job title. Cheerful "Apply now — we'd love to meet you!" CTA. Confetti or illustration elements. "Powered by Bob" in footer.</structure>
    </header>
    <form-fields>
      <field type="text" label="Hey, what's your name? *" note="Casual label styling"/>
      <field type="email" label="Email address *"/>
      <field type="tel" label="Phone number"/>
      <field type="file-upload" label="Drop your resume here ✨"/>
      <field type="url" label="LinkedIn (optional)"/>
      <field type="textarea" label="Anything else you'd like to share?"/>
    </form-fields>
    <distinctive-quirks>
      <quirk>Entire tone is casual and warm: "Hey 👋 Tell us a bit about yourself!"</quirk>
      <quirk>Confetti animation on submit: "Woohoo! Bob got your application!"</quirk>
      <quirk>Then 4 seconds of confetti. Then confetti stops. Then: "Oops — looks like Bob isn't home right now."</quirk>
      <quirk>Candidate portal username auto-assigned as candidate_{uuid} with no way to change it</quirk>
      <quirk>HiBob calls their HR system "Bob" — all copy references "Bob" as if it's a person</quirk>
      <quirk>Illustrations of cartoon people doing team activities appear throughout</quirk>
      <quirk>The jarring tonal shift between cheerful application and cold rejection is the core joke</quirk>
    </distinctive-quirks>
    <overall-feel>The HR system that wants to be your friend. Bob will not respond to your emails.</overall-feel>
  </ats>

</ats-reference>
```
