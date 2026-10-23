export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs font-semibold leading-10 tracking-tight site-title">
            二一的个人网站
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            聚焦 AI 应用与 Agent 开发，探索如何将大模型用于具体业务场景。
          </p>
          <section>
            <h2 className="section-title">关于我</h2>
            <p>
              我曾借助 AI 工具开发品牌日报自动化工具，
              梳理数据源与日报字段的对应关系及部分计算规则，并与人工报表逐项核对数字和格式。
              该工具现已在公司使用。
            </p>
          </section>
          <section className="projects">
            <h2 className="section-title">项目经历</h2>
            <article className="project-card">
              <h3>品牌日报自动化工具</h3>
              <p>
                读取上传的数据源文件，根据字段对应关系和部分计算规则填写日报；
                与人工报表逐项核对数字和格式。工具现已在公司使用。
              </p>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
