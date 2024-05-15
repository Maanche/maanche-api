import { app } from './app';
import { checkDatabaseConnection, config } from './infrastructure';

//connecting to database
checkDatabaseConnection();

app.listen(config.port, () => {
  console.log(`Server is working on 🏃🏃🏃PORT=${config.port}🏃🏃🏃`);
});
