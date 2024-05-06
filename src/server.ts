import { app } from './app';
import { config } from './infrastructure';

//connecting to database

app.listen(config.port, () => {
  console.log(`Server is working on 🏃🏃🏃PORT=${config.port}🏃🏃🏃`);
});
