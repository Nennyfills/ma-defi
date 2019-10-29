import path from 'path';
import Express from 'express';
import Debug from 'debug';

const app = Express();
const debug = Debug('dev');

app.use(Express.static(path.resolve(__dirname, 'build')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  debug('listening on port 3000');
});
