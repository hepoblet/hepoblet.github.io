const { version } = require('../../../package.json');

const Home = () => (
  <div>
    <div>Home</div>
    <div>
      <p>
        hepoblet.github.io
      </p>
      <p>
        v
        {version}
      </p>
    </div>
  </div>
);

export default Home;
