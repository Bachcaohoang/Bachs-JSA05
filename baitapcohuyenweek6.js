function thu() {
    return new Promise(resolve => {
      setTimeout(() => {
      resolve("Bắt đầu ");},
       5000);
      });
      }
  
  async function print(){
  console.log( "Chuẩn bị")
  const  result = await thu(); 
  console.log(result );
  
  }
  print();