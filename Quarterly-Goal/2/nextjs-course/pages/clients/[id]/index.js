import { useRouter } from "next/router";
function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  function loadProjectHandler(){
    //load data
    router.push('/clients/smit/projecta')
  }
  return (
    <div>
      <h1> The Projects of Given Client </h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
