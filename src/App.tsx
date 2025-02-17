import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Welcome to the Starwind Plugin Template</h1>
      <p className={styles.text}>
        Welcome to the <strong>Starwind Plugin Template</strong> — a framework for building isolated
        plugins based on <strong>React</strong>. This template enables the development and
        integration of custom plugins into the core application, offering support for local
        development and flexible configuration.
      </p>

      <h2 className={styles.subtitle}>🌐 Key Features</h2>
      <ul className={styles.list}>
        <li>
          <strong>Isolated Architecture:</strong> Each plugin operates as an independent application
          and can interact with the core through a public API.
        </li>
        <li>
          <strong>Local Development:</strong> Ability to run the plugin separately from the core for
          convenient debugging and testing.
        </li>
        <li>
          <strong>Flexible Configuration:</strong> Support for modifying and extending functionality
          at any time, with options for installing dependencies and configuring the build process.
        </li>
        <li>
          <strong>Core Integration:</strong> Full support for isolated integration with the main
          application using Microfrontend technologies.
        </li>
      </ul>

      <h2 className={styles.subtitle}>🔍 Command Descriptions</h2>
      <ul className={styles.list}>
        <li>
          <code className={styles.code}>npm start</code> — starts the React application in
          development mode.
        </li>
        <li>
          <code className={styles.code}>npm run dev</code> — starts the application with Express
          proxying for easy testing.
        </li>
        <li>
          <code className={styles.code}>npm run serve</code> — builds the application for
          integration with the core using <strong>Module Federation</strong>, required for core
          integration.
        </li>
      </ul>

      <h2 className={styles.subtitle}>⚙️ UI Creation and Local Development</h2>
      <p className={styles.text}>
        Since this template functions as an independent application, you can run it separately for
        development purposes. To begin working with the plugin, follow these steps:
      </p>
      <p className={styles.text}>
        <code className={styles.code}>npm install && npm start</code>
      </p>
      <p className={styles.text}>
        By default, the application will be available at{' '}
        <code className={styles.code}>http://localhost:3000</code>.
      </p>
      <p className={styles.text}>You are free to install any libraries or frameworks as needed.</p>
      <p className={styles.text}>
        Running <code className={styles.code}>npm run dev</code> will start the server for handling
        requests. The public API will be accessible at <code className={styles.code}>/api</code>.
        For example, a request to <code className={styles.code}>/api/ping</code> will return the
        corresponding response.
      </p>

      <h2 className={styles.subtitle}>🔗 Plugin Integration with the Core</h2>
      <p className={styles.text}>
        Plugin integration with the core is achieved using{' '}
        <strong>Webpack Module Federation</strong>. The template utilizes{' '}
        <strong>create-react-app</strong>, but you can configure any other build setup that supports
        this technology.
      </p>

      <p className={styles.text}>
        The main command for preparing the module for injection into the core is:
      </p>
      <pre className={styles.pre}>
        <code className={styles.code}>npm run serve</code>
      </pre>
      <p className={styles.text}>This command performs several actions:</p>
      <ul className={styles.list}>
        <li>Compiles the plugin UI and saves it as static files.</li>
        <li>
          Starts a server with Express for serving the static files and handling API requests.
        </li>
        <li>
          Generates an injection file for Module Federation named{' '}
          <code className={styles.code}>remoteEntry.js</code>.
        </li>
        <li>
          The <code className={styles.code}>injector.js</code> file plays a crucial role, creating a
          function that can be used in the core for integration.
        </li>
      </ul>

      <p className={styles.text}>
        For detailed instructions and code examples, refer to the repository.
      </p>
    </div>
  );
}

export default App;
