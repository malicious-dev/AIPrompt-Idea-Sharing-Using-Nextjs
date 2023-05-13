import Feed from '@components/Feed';

const Home = () => (
  <>
    <section className="w-full flex-center flex-col bg-gradient-to-r from-orange-500 shadow-lg p-5">
      <h1 className="head_text text-center md:font-sm">
        Discover, Create & Share
        <br className="max-md:hidden" />
        {/* <hr className="my-2 " /> */}
        <span className="bg-gradient-to-r from-red-600 to-lime-600 bg-clip-text text-transparent text-center">
          {' '}
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        AIPrompt is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
    </section>
    <Feed />
  </>
);

export default Home;
