import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, Radio } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export const projectTabs = [
  {
    title: "Plura",
    value: "plura",
    type: "web",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-lg md:-10 p-5 text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <div className="overflow-y-auto h-full">
          <p className="text-lg font-bold text-muted-foreground">Fullstack</p>
          <Link
            href="https://plura-denvud.vercel.app/"
            className="text-xl md:text-4xl font-bold mt-2 inline-flex gap-3 items-center hover:text-muted-foreground transition-colors"
          >
            Plura CRM & CMS <ExternalLink className="w-6 h-6" />
          </Link>
          <div className="flex gap-2 flex-wrap items-center mt-4">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Typescript</Badge>
            <Badge variant="secondary">Clerk</Badge>
            <Badge variant="secondary">Uploadthing</Badge>
            <Badge variant="secondary">Stripe</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">Radix UI</Badge>
            <Badge variant="secondary">Prisma</Badge>
            <Badge variant="secondary">Bun</Badge>
            <Badge variant="secondary">MySQL</Badge>
            <Badge variant="secondary">Zod</Badge>
            <Badge variant="secondary">Framer</Badge>
            <Badge variant="secondary">React Hook Form</Badge>
            <Badge variant="secondary">React Beautiful DND</Badge>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Link
              href="https://plura-denvud.vercel.app/"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <Radio />
              Demo
            </Link>
            <Link
              href="https://github.com/denvudd/plura"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <FaGithub className="w-5 h-5" />
              Github
            </Link>
          </div>
          <div className="mt-4 space-y-2 border-t pt-4 border-border">
            <div className="h-[300px] md:h-[550px] w-full relative mb-4">
              <Image
                src="/assets/projects/plura.png"
                fill
                quality={100}
                className="object-contain object-center absolute h-full w-full inset-0 rounded-md"
                alt="Plura"
              />
            </div>
            <h3 className="font-semibold text-xl">
              SaaS Website Builder, Project Management And Dashboard With Stripe
              using Nextjs14, Bun, Stripe Connect, Prisma, MySQL, Tailwind
            </h3>
            <p className="font-medium text-lg">Features in this application.</p>
            <ul className="pl-4 space-y-1">
              <li>🤯 Multivendor B2B2B Saas</li>
              <li>🏢 Agency and Sub accounts</li>
              <li>🌐 Unlimited funnel hosting</li>
              <li>🚀 Full Website & Funnel builder</li>
              <li>💻 Role-based Access</li>
              <li>🔄 Stripe Subscription plans</li>
              <li>🛒 Stripe add-on products</li>
              <li>
                🔐 Connect Stripe accounts for all users! - Stripe Connect
              </li>
              <li>💳 Charge application fee per sale and recurring sales</li>
              <li>💰 Custom Dashboards</li>
              <li>📊 Media Storage</li>
              <li>📈 Stripe Product Sync</li>
              <li>📌Custom checkouts on funnels</li>
              <li>📢 Get leads from funnels</li>
              <li>🎨 Kanban board</li>
              <li>📂 Project management system</li>
              <li>🔗 Notifications</li>
              <li>📆 Funnel performance metrics</li>
              <li>🧾 Agency and subaccount metrics</li>
              <li>🌙 Graphs and charts</li>
              <li>☀️ Light & Dark mode</li>
              <li>📄 Functioning landing page</li>
            </ul>
            <h4 className="text-lg font-semibold">Website Builder</h4>
            <p>
              A simple website builder that allows you to create content on the
              page. Simply drag and drop the chosen element (such as a
              container, text, or even a payment form) onto the editor page.
            </p>
            <p>
              The editor has full accessibility; for example, to undo your last
              actions, click the Undo button or press the Ctrl + Z key
              combination. To preview the site in Preview mode, press the Ctrl +
              P key combination To style the selected element, choose the
              section in the Settings tab and modify the styles as desired.
              Hotkeys are also available, for example, Ctrl + B to make text
              bold or Ctrl + I to italicize font style.
            </p>
            <p>
              To preview the site in Preview mode, press the Ctrl + P key
              combination
            </p>
            <p>
              To style the selected element, choose the section in the Settings
              tab and modify the styles as desired. Hotkeys are also available,
              for example, Ctrl + B to make text bold or Ctrl + I to italicize
              font style.
            </p>
            <p>
              You can see the layers of your entire page. To do that just
              navigate to the Layers tab where you can see your layers structure
              in a tree-like representation.
            </p>
            <p>
              You can also upload media files (such as images) to the Media
              storage to use them in the Website Builder. To do this, navigate
              to the Media tab and select the file you want to upload.
            </p>
            <h4 className="text-lg font-semibold">Kanban Board</h4>
            <p>
              You can create new lanes and new tickets within them. It&apos;s
              possible to drag cards and lanes to change their order. You can
              create new tags and assign other users who have access to your
              team to specific tickets, as well as leave a contact link.
            </p>
            <h4 className="text-lg font-semibold">Team Access</h4>
            <p>
              If you&apos;ve created an agency, you can create sub-accounts for
              that agency.
            </p>
            <p>
              To grant access to another user for a sub-account of the agency,
              you can send them an invitation via email.
            </p>
            <p>
              If the user accepts the invitation to the agency, you can control
              their access to different sub-accounts.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Cypress",
    value: "cypress",
    type: "web",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-lg md:-10 p-5 text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <div className="overflow-y-auto h-full">
          <p className="text-lg font-bold text-muted-foreground">Fullstack</p>
          <Link
            href="https://cypress-r2o0.onrender.com/"
            className="text-xl md:text-4xl font-bold mt-2 inline-flex gap-3 items-center hover:text-muted-foreground transition-colors"
          >
            Cypress SaaS <ExternalLink className="w-6 h-6" />
          </Link>
          <div className="flex gap-2 flex-wrap items-center mt-4">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Typescript</Badge>
            <Badge variant="secondary">Supabase</Badge>
            <Badge variant="secondary">Drizzle</Badge>
            <Badge variant="secondary">Postgres</Badge>
            <Badge variant="secondary">Stripe</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">Radix UI</Badge>
            <Badge variant="secondary">Bun</Badge>
            <Badge variant="secondary">Zod</Badge>
            <Badge variant="secondary">React Hook Form</Badge>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Link
              href="https://cypress-r2o0.onrender.com/"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <Radio />
              Demo (Delay)
            </Link>
            <Link
              href="https://github.com/denvudd/cypress"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <FaGithub className="w-5 h-5" />
              Github
            </Link>
          </div>
          <div className="mt-4 space-y-2 border-t pt-4 border-border">
            <div className="h-[300px] md:h-[550px] w-full relative mb-4">
              <Image
                src="/assets/projects/cypress.png"
                fill
                quality={100}
                className="object-contain object-center absolute h-full w-full inset-0 rounded-md"
                alt="Plura"
              />
            </div>
            <h3 className="font-semibold text-xl">
              SaaS Notion Clone with Realtime cursors, Nextjs 13, Stripe,
              Drizzle ORM, Tailwind, Supabase, Sockets
            </h3>
            <div className="rounded-md border-red-500 text-red-500 border p-4 font-medium">
              <h5>Caution!</h5>
              <p>
                Unfortunately, there is a delay of 1 minute before the cold
                start of the application. It&apos;s not me but a Render free tier. I
                can&apos;t deploy this app on Vercel because they don&apos;t support web
                sockets and serverless, so I deployed it on Render (because it&apos;s
                free).
              </p>
            </div>
            <p className="font-medium text-lg">Features in this application.</p>
            <ul className="pl-4 space-y-1">
              <li>🤯 Real-time cursors</li>
              <li>📝 Real-time text selection</li>
              <li>⏱️ Real-time database and collaboration</li>
              <li>🟢 Real-time presence</li>
              <li>🗑️ Move to trash functionality</li>
              <li>😜 Custom emoji picker</li>
              <li>🌙 Light mode dark mode</li>
              <li>🚨 Next.js 13 app router</li>
              <li>🗺️ Creating free plan restrictions</li>
              <li>💰 Take monthly payments</li>
              <li>📧 Custom email 2FA invitation</li>
              <li>⚡️ Supabase Row level policy</li>
              <li>👨‍👨‍👧‍👦 Real-time Collaboration</li>
              <li>👾 Deployment</li>
              <li>🤑 Custom Rich text editor</li>
              <li>📚 Update profile settings</li>
              <li>📍 Manage payments in a portal</li>
              <li>🔐 Custom Authentication</li>
              <li>✳️ Websockets</li>
              <li>📣 Optimistic UI</li>
              <li>📱 Responsive design</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "TMDB",
    value: "tmdb",
    type: "web",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-lg md:-10 p-5 text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <div className="overflow-y-auto h-full">
          <p className="text-lg font-bold text-muted-foreground">Front-End</p>
          <Link
            href="https://plura-denvud.vercel.app/"
            className="text-xl md:text-4xl font-bold mt-2 inline-flex gap-3 items-center hover:text-muted-foreground transition-colors"
          >
            The Movie Database <ExternalLink className="w-6 h-6" />
          </Link>
          <div className="flex gap-2 flex-wrap items-center mt-4">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Typescript</Badge>
            <Badge variant="secondary">RTK Query</Badge>
            <Badge variant="secondary">TMDB API</Badge>
            <Badge variant="secondary">Ant Design</Badge>
            <Badge variant="secondary">SCSS</Badge>
            <Badge variant="secondary">Jest</Badge>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Link
              href="https://react-dbmovies.vercel.app/"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <Radio />
              Demo
            </Link>
            <Link
              href="https://github.com/denvudd/react-dbmovies.github.io"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <FaGithub className="w-5 h-5" />
              Github
            </Link>
          </div>
          <div className="mt-4 space-y-2 border-t pt-4 border-border">
            <div className="h-[300px] md:h-[550px] w-full relative mb-4">
              <Image
                src="/assets/projects/tmdb.png"
                fill
                quality={100}
                className="object-contain object-center absolute h-full w-full inset-0 rounded-md"
                alt="Plura"
              />
            </div>
            <h3 className="font-semibold text-xl">
              The Movie Database Full Clone
            </h3>
            <p>
              TMDB serves as a central hub for movie enthusiasts, industry
              professionals, and developers, providing them with valuable
              information and tools to explore, discover, and engage with the
              world of cinema and television. Here are some key features:
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                <span className="font-medium">Actor and Crew Profiles:</span>{" "}
                TMDB contains profiles of actors, actresses, directors,
                producers, and other crew members involved in the film and
                television industry. Users can explore their biographies,
                filmography, and other relevant information.
              </li>
              <li>
                <span className="font-medium">Reviews and Ratings:</span> Users
                can read and contribute reviews and ratings for movies and TV
                shows on TMDB. This feature helps users make informed decisions
                about what to watch and provides valuable feedback to the
                community.
              </li>
              <li>
                <span className="font-medium">Lists and Recommendations:</span>{" "}
                TMDB allows users to create and share lists of their favorite
                movies and TV shows. It also provides personalized
                recommendations based on users viewing history and preferences.
              </li>
              <li>
                <span className="font-medium">Trailers and Videos:</span> TMDB
                hosts trailers, teasers, clips, and other videos related to
                movies and TV shows. Users can watch these videos to get a
                preview of the content before deciding to watch.
              </li>
            </ol>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Djinni",
    value: "djinni",
    type: "web",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-lg md:-10 p-5 text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <div className="overflow-y-auto h-full">
          <p className="text-lg font-bold text-muted-foreground">Fullstack</p>
          <Link
            href="https://ivanpeklin-racing.com/en"
            className="text-xl md:text-4xl font-bold mt-2 inline-flex gap-3 items-center hover:text-muted-foreground transition-colors"
          >
            Djinni
            <ExternalLink className="w-6 h-6" />
          </Link>
          <div className="flex gap-2 flex-wrap items-center mt-4">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Typescript</Badge>
            <Badge variant="secondary">Next Auth</Badge>
            <Badge variant="secondary">Nest.js</Badge>
            <Badge variant="secondary">Prisma</Badge>
            <Badge variant="secondary">MySQL</Badge>
            <Badge variant="secondary">Uploadthing</Badge>
            <Badge variant="secondary">Husky</Badge>
            <Badge variant="secondary">Radix UI</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">Recharts</Badge>
            <Badge variant="secondary">Zod</Badge>
            <Badge variant="secondary">React Hook Form</Badge>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Link
              href="https://ivanpeklin-racing.com/en"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <Radio />
              Demo
            </Link>
            <Link
              href="https://github.com/denvudd/djinni-clone-frontend.github.io"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <FaGithub className="w-5 h-5" />
              Github
            </Link>
          </div>
          <div className="mt-4 space-y-2 border-t pt-4 border-border">
            <div className="h-[300px] md:h-[550px] w-full relative mb-4">
              <Image
                src="/assets/projects/djinni.png"
                fill
                quality={100}
                className="object-contain object-center absolute h-full w-full inset-0 rounded-md"
                alt="Peklin"
              />
            </div>
            <h3 className="font-semibold text-xl">
              Djinni - A Modern Fullstack Djinni Clone
            </h3>
            <p className="text-red-500 font-semibold">
              Warning: This project is still in development and NOT ready for
              production use.
            </p>
            <p>
              The project clones the functionality of Djinni, a Ukrainian job
              platform. Here are a few key features:
            </p>
            <ul className="pl-4 space-y-1">
              <li>
                ⛔️ User authentication role system - candidate and employer
              </li>
              <li>📥 Authentication using Credentials & OAuth Providers</li>
              <li>📶 Custom feed for employer & candidate</li>
              <li>🖌 Customized profile data creation and design</li>
              <li>
                👷 Creation, editing, deletion, and archiving of job vacancies
              </li>
              <li>💻 Viewing available candidates as an employer</li>
              <li>📄 Viewing job vacancies as a candidate</li>
              <li>
                💬 Responses to job vacancies, with a dedicated inbox for both
                candidates and employers
              </li>
              <li>🔽 File uploads: candidate profile photos and resumes</li>
              <li>🎨 Markdown support</li>
              <li>📁 Modern data fetching using react-query, axios, and SSR</li>
              <li>🌐 SEO setup and optimization</li>
              <li>🕶 Color theme toggle</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Sieben Umzuege",
    value: "su",
    type: "web",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-lg md:-10 p-5 text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <div className="overflow-y-auto h-full">
          <p className="text-lg font-bold text-muted-foreground">Front-End</p>
          <Link
            href="https://sieben-umzuege.de/de"
            className="text-xl md:text-4xl font-bold mt-2 inline-flex gap-3 items-center hover:text-muted-foreground transition-colors"
          >
            Sieben Umzuge CRM & CMS <ExternalLink className="w-6 h-6" />
          </Link>
          <div className="flex gap-2 flex-wrap items-center mt-4">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Typescript</Badge>
            <Badge variant="secondary">Redux</Badge>
            <Badge variant="secondary">Ant Design</Badge>
            <Badge variant="secondary">i18</Badge>
            <Badge variant="secondary">Recharts</Badge>
            <Badge variant="secondary">Vite</Badge>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Link
              href="https://sieben-umzuege.de/de"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <Radio />
              Demo
            </Link>
          </div>
          <div className="mt-4 space-y-2 border-t pt-4 border-border">
            <div className="h-[300px] md:h-[550px] w-full relative mb-4">
              <Image
                src="/assets/projects/su.png"
                fill
                quality={100}
                className="object-contain object-center absolute h-full w-full inset-0 rounded-md"
                alt="Su"
              />
            </div>
            <h3 className="font-semibold text-xl">Sieben Umzuge CRM & CMS</h3>
            <p>
              Sieben Umzuge is a German certified transportation company
              specializing in transportation and relocation services. The
              project involved two main components: a 24-page website and
              CRM/CMS systems. I worked on both projects. The most interesting
              case I developed from scratch is a Booking system similar to
              Calendly, which needed to be implemented both on the website and
              in the CRM system.
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                <span className="font-semibold">Users</span> can fill out a
                contact form, view available dates and times on the calendar,
                and schedule an online or offline meeting. To access the booking
                page, users need to fill out a transportation calculation form;
                the data from this form is also sent along with the contact
                form.
              </li>
              <li>
                <span className="font-semibold">Administrators</span> can create
                available dates and time slots for meetings. Time slots have
                their own complex logic and date handling. Additionally,
                administrators can cancel meetings and view all scheduled
                appointments.
              </li>
              <li>
                Also I worked on CMS system developed by our team in contact
                with Dev Ops department.
              </li>
            </ol>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Hippo Digital",
    value: "hippo",
    type: "web",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-lg md:-10 p-5 text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <div className="overflow-y-auto h-full">
          <p className="text-lg font-bold text-muted-foreground">Front-End</p>
          <Link
            href="https://hippodigital.co.uk/"
            className="text-xl md:text-4xl font-bold mt-2 inline-flex gap-3 items-center hover:text-muted-foreground transition-colors"
          >
            Hippo Digital CRM
            <ExternalLink className="w-6 h-6" />
          </Link>
          <div className="flex gap-2 flex-wrap items-center mt-4">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Typescript</Badge>
            <Badge variant="secondary">Redux</Badge>
            <Badge variant="secondary">SCSS</Badge>
            <Badge variant="secondary">Storybook</Badge>
            <Badge variant="secondary">Apex Charts</Badge>
            <Badge variant="secondary">React DND</Badge>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Link
              href="https://hippodigital.co.uk/"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <Radio />
              Demo
            </Link>
          </div>
          <div className="mt-4 space-y-2 border-t pt-4 border-border">
            <div className="h-[300px] md:h-[550px] w-full relative mb-4">
              <Image
                src="/assets/projects/hippo.png"
                fill
                quality={100}
                className="object-contain object-center absolute h-full w-full inset-0 rounded-md"
                alt="Su"
              />
            </div>
            <h3 className="font-semibold text-xl">
              Hippo Digital CRM & Website
            </h3>
            <p>
              Hippo Digital&apos;s CRM system is a robust platform designed to
              streamline and enhance customer relationship management processes.
              Built using cutting-edge technologies such as React, TypeScript,
              Redux, Storybook, and Apex Charts, it offers a seamless and
              intuitive user experience.
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>
                The system is meticulously crafted by Hippo Digital, a trusted
                digital services partner known for its commitment to designing
                with empathy and building for impact. With a focus on
                user-centric design and innovative solutions, Hippo Digital
                ensures that its CRM system meets the unique needs and
                challenges of modern businesses.
              </li>
              <li>
                Furthermore, Storybook is employed for component-driven
                development, allowing for rapid iteration and testing of UI
                components. Apex Charts enhance data visualization capabilities,
                empowering users to gain valuable insights and make informed
                decisions.
              </li>
            </ol>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Deliveroo",
    value: "deliveroo",
    type: "mobile",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-lg md:-10 p-5 text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <div className="overflow-y-auto h-full">
          <p className="text-lg font-bold text-muted-foreground">Mobile</p>
          <Link
            href="https://ivanpeklin-racing.com/en"
            className="text-xl md:text-4xl font-bold mt-2 inline-flex gap-3 items-center hover:text-muted-foreground transition-colors"
          >
            Deliveroo Clone
            <ExternalLink className="w-6 h-6" />
          </Link>
          <div className="flex gap-2 flex-wrap items-center mt-4">
            <Badge variant="secondary">React Native</Badge>
            <Badge variant="secondary">Expo</Badge>
            <Badge variant="secondary">Zustand</Badge>
            <Badge variant="secondary">Google Maps API</Badge>
            <Badge variant="secondary">Google Geocoding</Badge>
            <Badge variant="secondary">Zustand</Badge>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Link
              href="https://github.com/denvudd/deliveroo-expo"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <FaGithub className="w-5 h-5" />
              Github
            </Link>
          </div>
          <div className="mt-4 space-y-2 border-t pt-4 border-border">
            <div className="h-[300px] md:h-[550px] w-full relative mb-4">
              <Image
                src="/assets/projects/deliveroo.jpg"
                fill
                quality={100}
                className="object-contain object-center absolute h-full w-full inset-0 rounded-md"
                alt="Peklin"
              />
            </div>
            <h3 className="font-semibold text-xl">
              React Native Food Ordering Clone
            </h3>
            <p>Additional features:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Expo Router file-based navigation</li>
              <li>Google & Apple Auth with Clerk</li>
              <li>Reanimated 3 for animations</li>
              <li>MapView with Marker and Clustering</li>
              <li>Bottom Sheet</li>
              <li>Modal with Animations and Blurred Background</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Mifu",
    value: "mifu",
    type: "web",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-lg md:-10 p-5 text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <div className="overflow-y-auto h-full">
          <p className="text-lg font-bold text-muted-foreground">Front-End</p>
          <Link
            href="https://hippodigital.co.uk/"
            className="text-xl md:text-4xl font-bold mt-2 inline-flex gap-3 items-center hover:text-muted-foreground transition-colors"
          >
            Mifu CRM
            <ExternalLink className="w-6 h-6" />
          </Link>
          <div className="flex gap-2 flex-wrap items-center mt-4">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Typescript</Badge>
            <Badge variant="secondary">Amplify AWS</Badge>
            <Badge variant="secondary">React Query</Badge>
            <Badge variant="secondary">Chakra UI</Badge>
            <Badge variant="secondary">i18n</Badge>
            <Badge variant="secondary">Apex Charts</Badge>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Link
              href="https://www.mifu.co.uk/"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <Radio />
              Demo
            </Link>
          </div>
          <div className="mt-4 space-y-2 border-t pt-4 border-border">
            <div className="h-[300px] md:h-[550px] w-full relative mb-4">
              <Image
                src="/assets/projects/mifu.png"
                fill
                quality={100}
                className="object-contain object-center absolute h-full w-full inset-0 rounded-md"
                alt="Su"
              />
            </div>
            <h3 className="font-semibold text-xl">Mifu CRM & Website</h3>
            <p>
              &quot;AI-driven campaign creation, operation and analysis to help
              your business reach targeted customers for less. Mifu enables
              micro-influencer marketing at scale, with zero hassle.&quot;
            </p>
            <p>
              Mifu assists in collaboration between brands and influencers. Mifu
              features Role-Based Authorization and advanced functionality, such
              as chat, statistics display, client management, contract signing,
              and more.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Airbnb",
    value: "airbnb",
    type: "mobile",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-lg md:-10 p-5 text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <div className="overflow-y-auto h-full">
          <p className="text-lg font-bold text-muted-foreground">Mobile</p>
          <Link
            href="https://ivanpeklin-racing.com/en"
            className="text-xl md:text-4xl font-bold mt-2 inline-flex gap-3 items-center hover:text-muted-foreground transition-colors"
          >
            Airbnb Clone
            <ExternalLink className="w-6 h-6" />
          </Link>
          <div className="flex gap-2 flex-wrap items-center mt-4">
            <Badge variant="secondary">React Native</Badge>
            <Badge variant="secondary">Expo</Badge>
            <Badge variant="secondary">Clerk</Badge>
            <Badge variant="secondary">Reanimated</Badge>
            <Badge variant="secondary">Google Maps API</Badge>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Link
              href="https://github.com/denvudd/airbnb-expo"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <FaGithub className="w-5 h-5" />
              Github
            </Link>
          </div>
          <div className="mt-4 space-y-2 border-t pt-4 border-border">
            <div className="h-[300px] md:h-[550px] w-full relative mb-4">
              <Image
                src="/assets/projects/airbnb.png"
                fill
                quality={100}
                className="object-contain object-center absolute h-full w-full inset-0 rounded-md"
                alt="Peklin"
              />
            </div>
            <h3 className="font-semibold text-xl">
              React Native AirBnB Clone with Clerk
            </h3>
            <p>
              This is a React Native AirBnB clone using Clerk for user
              authentication.
            </p>
            <p>Additional features:</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Expo Router file-based navigation</li>
              <li>Google & Apple Auth with Clerk</li>
              <li>Reanimated 3 for animations</li>
              <li>MapView with Marker and Clustering</li>
              <li>Bottom Sheet</li>
              <li>Modal with Animations and Blurred Background</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Vantazhivochka",
    value: "vantazhivochka",
    type: "web",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-lg md:-10 p-5 text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <div className="overflow-y-auto h-full">
          <p className="text-lg font-bold text-muted-foreground">Fullstack</p>
          <Link
            href="https://hippodigital.co.uk/"
            className="text-xl md:text-4xl font-bold mt-2 inline-flex gap-3 items-center hover:text-muted-foreground transition-colors"
          >
            Vantazhivochka CRM
            <ExternalLink className="w-6 h-6" />
          </Link>
          <div className="flex gap-2 flex-wrap items-center mt-4">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">Typescript</Badge>
            <Badge variant="secondary">Next Auth</Badge>
            <Badge variant="secondary">Telegram Bot API</Badge>
            <Badge variant="secondary">Prisma</Badge>
            <Badge variant="secondary">MongoDB</Badge>
            <Badge variant="secondary">React Query</Badge>
            <Badge variant="secondary">Uploadthing</Badge>
            <Badge variant="secondary">Radix UI</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Link
              href="https://www.mifu.co.uk/"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <Radio />
              Demo
            </Link>
          </div>
          <div className="mt-4 space-y-2 border-t pt-4 border-border">
            <div className="h-[300px] md:h-[550px] w-full relative mb-4">
              <Image
                src="/assets/projects/vantazhivochka.png"
                fill
                quality={100}
                className="object-contain object-center absolute h-full w-full inset-0 rounded-md"
                alt="Su"
              />
            </div>
            <h3 className="font-semibold text-xl">
              Vantazhivochka CRM & Website
            </h3>
            <p>
              &quot;Вантажівочка&quot; is a Ukrainian company specializing in
              freight transportation and waste removal. It has two projects: a
              website and a CRM system. The CRM system has rich functionality,
              here are a few key features:
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>
                <span className="font-semibold">
                  Client Display and Management:
                </span>{" "}
                After filling out the contact form on the website, the client is
                added to the table. In the table, clients can be deleted, marked
                as processed, or edited, and notes can also be made about the
                client.
              </li>
              <li>
                <span className="font-semibold">
                  Notification from Telegram Bot:
                </span>{" "}
                After filling out the contact form, a notification with client
                information is sent to the Telegram bot.
              </li>
              <li>
                <span className="font-semibold">Content Editing:</span> Prices
                for services can be edited, and additional information can be
                added or removed, which will be displayed on the website.
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Ivan Peklin",
    value: "peklin",
    type: "web",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-lg md:-10 p-5 text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <div className="overflow-y-auto h-full">
          <p className="text-lg font-bold text-muted-foreground">Front-End</p>
          <Link
            href="https://ivanpeklin-racing.com/en"
            className="text-xl md:text-4xl font-bold mt-2 inline-flex gap-3 items-center hover:text-muted-foreground transition-colors"
          >
            Ivan Peklin CRM
            <ExternalLink className="w-6 h-6" />
          </Link>
          <div className="flex gap-2 flex-wrap items-center mt-4">
            <Badge variant="secondary">Next.js</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Typescript</Badge>
            <Badge variant="secondary">Redux</Badge>
            <Badge variant="secondary">i18</Badge>
            <Badge variant="secondary">React DND</Badge>
            <Badge variant="secondary">Cloudinary</Badge>
            <Badge variant="secondary">Ant Design</Badge>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Link
              href="https://ivanpeklin-racing.com/en"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex items-center gap-2 text-white"
              )}
            >
              <Radio />
              Demo
            </Link>
          </div>
          <div className="mt-4 space-y-2 border-t pt-4 border-border">
            <div className="h-[300px] md:h-[550px] w-full relative mb-4">
              <Image
                src="/assets/projects/peklin.png"
                fill
                quality={100}
                className="object-contain object-center absolute h-full w-full inset-0 rounded-md"
                alt="Peklin"
              />
            </div>
            <h3 className="font-semibold text-xl">Ivan Peklin CRM & Website</h3>
            <p>
              Ivan Peklin is a Ukrainian racing athlete. The project consists of
              two components: a website and a small-sized CRM system. The CRM
              system features user and new contact management functionality, as
              well as the ability to modify content on the page in the form of a
              table.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];
