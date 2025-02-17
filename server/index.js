import path from 'path';
import express from 'express';
import cors from 'cors';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { createWebpackDevConfig } from '@craco/craco';
import { fileURLToPath } from 'url';

import router from './routes/index.js';
import cracoConfig from '../craco.config.js';

const PORT = 3001;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webpackConfig = createWebpackDevConfig(cracoConfig);
const compiler = webpack(webpackConfig);

app.use(cors());
app.use(express.json());

app.use('/', router);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output?.publicPath || '/'
  })
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Application is running http://localhost:${PORT}`);
});
