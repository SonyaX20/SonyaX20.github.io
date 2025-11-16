import { useState } from 'react';
import { Link } from 'react-router-dom';

const PodcastAIPMSummary = () => {
  const [lang, setLang] = useState('en');

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-amber-700 hover:text-amber-800"
          >
            <span className="mr-2">←</span>
            <span>Back to Blog</span>
          </Link>
        </div>

        <header className="mb-10">
          <p className="text-sm text-amber-700 font-semibold mb-2">Podcast Summary</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            How AI is reshaping the product role · Highlights
          </h1>
          <p className="text-sm text-gray-500">@November 16, 2025 11:30 AM</p>
          <p className="mt-2 text-sm text-gray-600">
            Original episode: <span className="font-medium">How AI is reshaping the product role</span>{' '}
            | Oji and Ezinne Udezue · Lenny&apos;s Podcast
          </p>
          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
                lang === 'en'
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white text-amber-700 border-amber-300 hover:bg-amber-50'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('zh')}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
                lang === 'zh'
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white text-amber-700 border-amber-300 hover:bg-amber-50'
              }`}
            >
              中文
            </button>
          </div>
        </header>

        <main className="space-y-10 text-gray-800 leading-relaxed">
          {/* Overview & SEO-friendly intro */}
          <section className="space-y-4">
            {lang === 'en' ? (
              <>
                <p>
                  This page captures key insights from <strong>"How AI is reshaping the product role"</strong> on
                  Lenny&apos;s Podcast, featuring Oji and Ezinne Udezue. It focuses on how AI is changing the role of the
                  product manager, the <strong>core skills for AI-era PMs</strong>, the <strong>Shipyard model</strong>
                  , and practical action items for product leaders.
                </p>
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-2">On this page</p>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-amber-900">
                    <li>
                      <a href="#podcast-guests" className="hover:underline">
                        Podcast &amp; guests
                      </a>
                    </li>
                    <li>
                      <a href="#ai-role-change" className="hover:underline">
                        How AI is transforming the product manager role
                      </a>
                    </li>
                    <li>
                      <a href="#core-skills" className="hover:underline">
                        Core skills for product managers in the AI era
                      </a>
                    </li>
                    <li>
                      <a href="#shipyard" className="hover:underline">
                        The Shipyard product-development model
                      </a>
                    </li>
                    <li>
                      <a href="#ai-companies" className="hover:underline">
                        Traits of companies that use AI successfully
                      </a>
                    </li>
                    <li>
                      <a href="#key-lessons" className="hover:underline">
                        Key lessons from 50 years of product experience
                      </a>
                    </li>
                    <li>
                      <a href="#ai-home" className="hover:underline">
                        Oji&apos;s AI home-automation project
                      </a>
                    </li>
                    <li>
                      <a href="#action-items" className="hover:underline">
                        Action items for AI-era product managers
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <p>
                  本页整理自 Lenny&apos;s Podcast《How AI is reshaping the product role》一集，由 Oji 和 Ezinne Udezue
                  分享 <strong>AI 时代产品经理角色的变化</strong>、
                  <strong>核心能力与思维方式</strong>、<strong>造船厂（Shipyard）产品开发模式</strong>，以及可直接实践的行动建议。
                </p>
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-2">页面结构</p>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-amber-900">
                    <li>
                      <a href="#podcast-guests" className="hover:underline">
                        播客与嘉宾简介
                      </a>
                    </li>
                    <li>
                      <a href="#ai-role-change" className="hover:underline">
                        AI 时代产品经理角色的变革
                      </a>
                    </li>
                    <li>
                      <a href="#core-skills" className="hover:underline">
                        AI 时代产品经理的核心技能
                      </a>
                    </li>
                    <li>
                      <a href="#shipyard" className="hover:underline">
                        产品开发新模式：造船厂（Shipyard）
                      </a>
                    </li>
                    <li>
                      <a href="#ai-companies" className="hover:underline">
                        成功应用 AI 的公司特征
                      </a>
                    </li>
                    <li>
                      <a href="#key-lessons" className="hover:underline">
                        50 年产品经验的关键教训
                      </a>
                    </li>
                    <li>
                      <a href="#ai-home" className="hover:underline">
                        Oji 的 AI 家庭自动化项目
                      </a>
                    </li>
                    <li>
                      <a href="#action-items" className="hover:underline">
                        行动项目
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </section>

          <section id="podcast-guests">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {lang === 'en' ? 'Podcast & Guests' : '播客与嘉宾简介'}
            </h2>
            <p className="text-sm text-amber-700 mb-3 break-all">
              原节目链接：{' '}
              <a
                href="https://www.xiaoyuzhoufm.com/episode/68c25a6a2c82c9dccacf81dd"
                className="underline hover:text-amber-600"
                target="_blank"
                rel="noreferrer"
              >
                https://www.xiaoyuzhoufm.com/episode/68c25a6a2c82c9dccacf81dd
              </a>
            </p>
            <p className="text-sm text-amber-700 mb-4 break-all">
              英文原版视频：{' '}
              <a
                href="https://www.youtube.com/watch?v=e1R_-esuO9o"
                className="underline hover:text-amber-600"
                target="_blank"
                rel="noreferrer"
              >
                https://www.youtube.com/watch?v=e1R_-esuO9o
              </a>
            </p>
            <div className="mt-4 mb-6 aspect-video rounded-xl overflow-hidden shadow-lg border border-amber-100">
              <iframe
                src="https://www.youtube.com/embed/e1R_-esuO9o"
                title="How AI is reshaping the product role | Oji and Ezinne Udezue"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            {lang === 'en' ? (
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  The guests are <strong>Oji</strong> and <strong>Ezinne Udezue</strong>, a couple who are both highly
                  respected leaders in product management.
                </li>
                <li>Together, they have more than 50 years of product-management experience.</li>
                <li>
                  Oji served as Chief Product Officer at Calendly and Typeform, and previously led product teams at
                  Twitter, Atlassian, and Microsoft.
                </li>
                <li>
                  Ezinne was the Chief Product Officer at WP Engine and Vice President of Product at Procore.
                </li>
                <li>
                  They co-authored <em>Building Rocket Ships: Product Management for High-Growth Companies</em>.
                </li>
              </ul>
            ) : (
              <ul className="list-disc pl-5 space-y-2">
                <li>本期播客是知名产品管理播客 Lenny&apos;s Podcast。</li>
                <li>
                  嘉宾是 Oji 和 Ezinne Udezue 夫妇，两位产品管理领域资深领袖：
                  <ul className="list-[circle] pl-5 space-y-1 mt-1">
                    <li>两人合计拥有超过50年的产品管理经验。</li>
                    <li>
                      Oji曾是Calendly和Typeform的首席产品官，也在Twitter、Atlassian和微软带过产品团队。
                    </li>
                    <li>Azini曾是WP Engine的首席产品官和Procore的产品副总裁。</li>
                    <li>两人合著了《Building Rocket Ships: Product Management for High-Growth Companies》。</li>
                  </ul>
                </li>
              </ul>
            )}
          </section>

          {lang === 'en' ? (
            <>
              <section id="ai-role-change">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  How AI Is Transforming the Role of the Product Manager
                </h2>
                <p className="mb-3">
                  Responding to the claim that “AI will make product managers obsolete,” the guests offer a different
                  perspective.
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Shifts in the product manager&apos;s focus</h3>
                <ul className="list-disc pl-5 space-y-2 mb-3">
                  <li>
                    More time will be spent on the front end of the product-development lifecycle: validating customer
                    insights from data and deciding what to build.
                  </li>
                  <li>The way PMs support solution design and product building must change.</li>
                  <li>PMs need to participate more in supporting product marketing.</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    AI accelerates development and alters the traditional PM-to-engineer ratio:
                    <ul className="list-[circle] pl-5 space-y-1 mt-1">
                      <li>Some companies can produce a prototype within four hours after a customer meeting.</li>
                      <li>PMs must adapt to this acceleration or risk becoming the bottleneck.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section id="core-skills">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Core Skills for Product Managers in the AI Era
                </h2>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <p className="font-semibold">Attitudes &amp; Mindsets</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>
                        Curiosity and humility: willingness to admit what you don&apos;t know and start again as a
                        learner.
                      </li>
                      <li>
                        Ownership and proactiveness: spotting opportunities and seizing them instead of waiting for
                        permission.
                      </li>
                      <li>
                        Treat AI as a tool, focusing on what it enables rather than worrying about being replaced.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p className="font-semibold">Technical Skills</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>
                        Data literacy: deep understanding of how data is organized and used in an AI-driven world.
                      </li>
                      <li>
                        Evaluation (Evals): the ability to validate AI outputs and detect hallucinations or bias.
                      </li>
                      <li>
                        Model selection and optimization: understanding the strengths of different models and tuning
                        them for best performance.
                      </li>
                      <li>
                        Hands-on capability: directly participating in technical creation rather than staying at the
                        conceptual level.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p className="font-semibold">New Approaches to Product Design</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>
                        View products as living organisms, not static software—systems that continuously learn and
                        evolve from data.
                      </li>
                      <li>
                        Build the right guardrails into products to keep AI functionality within ethical boundaries.
                      </li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section id="shipyard">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  A New Product-Development Model: The “Shipyard”
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    The “shipyard” is a form of controlled chaos—seemingly messy but actually highly coordinated.
                  </li>
                  <li>
                    A core team consists of six functions:
                    <ul className="list-[circle] pl-5 space-y-1 mt-1">
                      <li>Product management</li>
                      <li>Engineering</li>
                      <li>Design</li>
                      <li>User research</li>
                      <li>Data / machine learning / AI specialists</li>
                      <li>Product marketing</li>
                    </ul>
                  </li>
                  <li>
                    The team also has “nerve endings”—customer-facing roles like sales and customer success.
                  </li>
                  <li>
                    The model emphasizes blurring role boundaries; team members must learn to wear multiple hats.
                  </li>
                </ul>
              </section>

              <section id="ai-companies">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Characteristics of Companies That Use AI Successfully
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Recognize that AI is a toolkit, not a universal solution:
                    <ul className="list-[circle] pl-5 space-y-1 mt-1">
                      <li>
                        Problems and customer pain points still exist; the key is redefining solutions with AI.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Adopt core AI, not just edge AI:
                    <ul className="list-[circle] pl-5 space-y-1 mt-1">
                      <li>Edge AI: inserting AI only at existing interface touchpoints.</li>
                      <li>Core AI: fundamentally rethinking workflows and problem spaces using AI.</li>
                    </ul>
                  </li>
                  <li>
                    Specialize first, then build an intelligent connective layer—avoid trying to build one massive
                    system that does everything.
                  </li>
                  <li>Be willing to reimagine the product, even rewrite the codebase.</li>
                  <li>Be bold in UX experimentation; don&apos;t be limited to chat interfaces.</li>
                </ul>
              </section>

              <section id="key-lessons">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Key Lessons From 50 Years of Product Experience
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Focus on sharp problems: choosing problems that address real pain points is the strongest
                    predictor of success.
                  </li>
                  <li>
                    Insist on simplicity: start with clarity and simplicity instead of flashy features.
                  </li>
                  <li>
                    Have a point of view and courage: don&apos;t create complex solutions out of fear of making decisions.
                  </li>
                  <li>
                    Communicate strategy effectively: ensure everyone on the team understands the purpose and meaning of
                    the work.
                  </li>
                  <li>
                    Understand customer behavior: differentiate between what customers say and what they do; learn the
                    motivations behind actions through observation.
                  </li>
                  <li>
                    Consider product ethics: recognize the responsibility of builders and avoid repeating mistakes seen
                    in social media.
                  </li>
                </ul>
              </section>

              <section id="ai-home">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Oji&apos;s AI Home-Automation Project</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    He built an intelligent home system—giving his home “eyes and ears.”
                  </li>
                  <li>
                    Designed a “super sensor” capable of detecting people, sounds, humidity, and temperature.
                  </li>
                  <li>
                    The system adjusts the environment based on human presence and manages energy usage.
                  </li>
                  <li>
                    Uses the open-source platform Home Assistant, combined with large language models and smaller
                    models such as Whisper.
                  </li>
                  <li>
                    This is his personal approach to learning AI: pick a real problem and build a solution around it.
                  </li>
                </ul>
              </section>

              <section id="action-items">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Action Items</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    PMs should cultivate curiosity, humility, and initiative, and proactively learn AI-related
                    knowledge and skills.
                  </li>
                  <li>
                    Choose a personal project to practice AI skills by solving a problem you genuinely care about.
                  </li>
                  <li>Learn Evals to validate AI outputs.</li>
                  <li>
                    Build cross-functional teams following the shipyard model with six core functions.
                  </li>
                  <li>
                    Re-examine product strategy and decide whether to adopt edge AI or core AI.
                  </li>
                  <li>
                    Pay attention to AI ethics and ensure proper guardrails are built into the product.
                  </li>
                </ul>
              </section>
            </>
          ) : (
            <>
              <section id="ai-role-change">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">AI时代产品经理角色的变革</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>针对“AI会让产品经理失业”的说法，嘉宾提出了不同见解。</li>
                  <li>
                    产品经理工作重点的转变：
                    <ul className="list-[circle] pl-5 space-y-1 mt-1">
                      <li>更多时间用于产品开发生命周期前端，验证客户数据洞察，决定做什么。</li>
                      <li>支持方案设计和产品构建的方式需要改变。</li>
                      <li>需要更多参与产品营销支持。</li>
                    </ul>
                  </li>
                  <li>
                    AI 加速了开发速度，改变了传统的产品经理与工程师配比：
                    <ul className="list-[circle] pl-5 space-y-1 mt-1">
                      <li>一些公司能在客户会议后四小时内拿出原型。</li>
                      <li>产品经理需要适应这种加速，否则可能成为团队的“瓶颈”。</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section id="core-skills">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">AI时代产品经理的核心技能</h2>
                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <p className="font-semibold">态度与思维方式</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>好奇心与谦逊：愿意承认不懂并以学习者姿态重新开始。</li>
                      <li>主人翁精神与主动性：能看到机会并自己主动抓住，而非等待授权。</li>
                      <li>将 AI 视为工具，专注于能用 AI 做什么，而非担心被 AI 取代。</li>
                    </ul>
                  </li>
                  <li>
                    <p className="font-semibold">技术能力</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>数据素养：深刻理解数据在 AI 世界中如何被组织和利用。</li>
                      <li>评估能力（Evals）：能够验证 AI 输出结果，识别幻觉和偏差。</li>
                      <li>模型选择与优化：了解不同模型的优势，能够进行调整以获得最佳性能。</li>
                      <li>亲自动手能力：实际参与技术创建，而非仅仅停留在理论层面。</li>
                    </ul>
                  </li>
                  <li>
                    <p className="font-semibold">产品设计新思维</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      <li>视产品为“有机体”而非静态软件，确保产品能从数据中持续学习和进化。</li>
                      <li>在产品中建立正确的护栏，确保 AI 功能在伦理边界内运行。</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section id="shipyard">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">产品开发新模式：造船厂（Shipyard）概念</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>造船厂是一种可控的混乱，看似杂乱但实际高度协调。</li>
                  <li>
                    核心团队由六种职能组成：
                    <ul className="list-[circle] pl-5 space-y-1 mt-1">
                      <li>产品经理、工程师、设计师、用户研究。</li>
                      <li>数据 / 机器学习 / AI 专家。</li>
                      <li>产品营销。</li>
                    </ul>
                  </li>
                  <li>团队拥有"神经末梢"：销售、客户成功等接触客户的角色。</li>
                  <li>强调角色界限模糊化，团队成员需学会承担多种角色。</li>
                </ul>
              </section>

              <section id="ai-companies">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">成功应用 AI 的公司特征</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    认识到AI是工具集而非万能解决方案：
                    <ul className="list-[circle] pl-5 space-y-1 mt-1">
                      <li>问题和客户痛点仍然存在，关键是如何用AI重塑解决方案。</li>
                    </ul>
                  </li>
                  <li>
                    采用"核心AI"而非仅"边缘AI"的方法：
                    <ul className="list-[circle] pl-5 space-y-1 mt-1">
                      <li>边缘AI：仅在现有软件交互点插入AI。</li>
                      <li>核心AI：从根本上用AI重新思考问题空间和工作流程。</li>
                    </ul>
                  </li>
                  <li>
                    先做专业化，再创建智能连接层：
                    <ul className="list-[circle] pl-5 space-y-1 mt-1">
                      <li>避免试图构建一个能做所有事情的庞大解决方案。</li>
                    </ul>
                  </li>
                  <li>愿意重新构想产品，甚至重写代码库。</li>
                  <li>在用户体验上大胆尝试，不局限于聊天界面。</li>
                </ul>
              </section>

              <section id="key-lessons">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">50年产品经验的关键教训</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>聚焦尖锐问题：选择真正能解决人们痛点的问题，这是成功的关键预测因素。</li>
                  <li>坚持简洁：产品设计应从简洁清晰开始，而非追求花哨功能。</li>
                  <li>有观点和勇气：不要因为害怕做决定而创造复杂的解决方案。</li>
                  <li>有效沟通战略：确保团队中的每个人都理解工作的目的和意义。</li>
                  <li>理解客户行为：区分客户说的和客户做的，通过观察理解需求背后的驱动力。</li>
                  <li>考虑产品伦理：认识到产品开发者的责任，避免重复社交媒体等领域的错误。</li>
                </ul>
              </section>

              <section id="ai-home">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Oji的 AI 家庭自动化项目</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>打造智能家居，给家里装上"眼睛和耳朵"。</li>
                  <li>设计了"超级传感器"，能看到人、听到声音、感知湿度和温度。</li>
                  <li>系统能根据人的存在自动调整环境，管理能源使用。</li>
                  <li>使用 Home Assistant 开源软件，结合大语言模型和小型模型如 Whisper。</li>
                  <li>这是他学习AI技术的个人方式：选择能解决自身具体问题的项目。</li>
                </ul>
              </section>

              <section id="action-items">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">行动项目</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>产品经理应培养好奇心、谦逊和主动性，主动学习AI相关知识和技能。</li>
                  <li>选择个人项目来实践AI技能，解决自己感兴趣的具体问题。</li>
                  <li>学习评估（Evals）技能，了解如何验证AI输出结果。</li>
                  <li>采用"造船厂"模式组建跨职能团队，包括六种核心职能。</li>
                  <li>审视产品策略，确定是采用"边缘AI"还是"核心AI"方法。</li>
                  <li>关注AI产品的伦理问题，确保在产品中建立适当的护栏。</li>
                </ul>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default PodcastAIPMSummary;
