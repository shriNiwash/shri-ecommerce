
export const getServerSideProps = async (context) => {
    console.log(context.req.cookies.jwt);
    const datas = context.req.cookies.jwt;
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${datas}`
  });
    const resp = await fetch("http://localhost:3001/karan",{
      method:"GET",
      credentials: 'include',
      headers: myHeaders
  }
    );
    console.log(resp);
  const data= "shri";
    return {
      props: {
        data,
      },
    };
  };

const Test = ()=>{

    return(<>
        <h1>Hello there shri</h1>
    </>)
}

export default  Test;