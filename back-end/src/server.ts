import app from './app';

const PORT = 3027;

const server = app.listen(PORT, () => console.log(`Ativo na porta: ${PORT}`)
)
export default server;

