import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found shell" id="conteudo">
      <p className="section-kicker">404 / ROTA NÃO ENCONTRADA</p>
      <h1>Essa conexão<br /><span>não existe.</span></h1>
      <p>O endereço pode ter mudado ou o projeto ainda não está disponível nesta rota.</p>
      <Link className="btn btn-primary" href="/">Voltar ao portfólio ↗</Link>
    </main>
  );
}
