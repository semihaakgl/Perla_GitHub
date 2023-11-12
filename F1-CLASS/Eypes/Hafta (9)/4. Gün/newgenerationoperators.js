//* New Generation Operators
//* destructure = JavaScript programlama dilinde bir nesnenin veya bir diziye ait değerleri ayrı değişkenlere atamanın bir yoludur. Bu, özellikle nesneler veya diziler içindeki verilere erişmek ve kullanmak için kullanışlıdır.

const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};
// console.log(car.name);
// console.log(car.model);
// console.log(car.engine);
// console.log(car.colors);   //? bu işlem gereksiz işimizi uzatır. bu yüzden destructure yaparak daha kısa yoldan yazabiliriz

//! destructure yöntemi
// const { name, model, engine, colors } = car; //? destructure yaparak işimizi kolaylaştırdık.

// console.log(name);
// console.log(model);
// console.log(engine);
// console.log(colors);
//! "key" değişikliği
// const { name: ad, model, engine, colors: renkler } = car; //? ":" koyarak key değişikliği yaptık. yani "name" arık "ad" olarak değişti

// console.log(ad);
// console.log(model);
// console.log(engine);
// console.log(renkler);

//! "value değişikliği"
// const { name: ad, model, engine: motor, colors } = car;
// console.log(motor);
// car.engine = 4.0;
// console.log(motor, car); //? value değişikliğine yenidn bak anlamadım.

// ****Nested***
// const cars = {
//   car1: {
//     name: "BMW",
//     model: 1990,
//     engine: 1.6,
//   },
//   car2: {
//     name: "Mercedes",
//     model: 2022,
//     engine: 2.0,
//   },
// };

// console.log(cars);
// console.log(cars.car1);
// console.log(cars.car1.name);

// const { car1, car2 } = cars;  //? destructure ederek her defasında cars yamaktan kurtulduk.
// console.log(car1);

//! nested destructure
// const {car1:{name,engine}, car2:{model}} =cars    //? içiçe destructure yapmış olduk.
// console.log(cars.car1.name) //? normalde böyle uzun yazıyorduk
// console.log(name);  //? ama destructure ederek bu şekilde sadece name ile bmw yi yazmış olduk


// const team =[
//   {
//     name: "john",
//     surname: "barry",
//     job: "developer",
//     age: 30,
//   },
//   {
//     name: "john",
//     surname: "barry",
//     job: "tester",
//     age: 45,
//   },
//   {
//     name: "hazel",
//     surname: "nut",
//     job: "team lead",
//     age: 40,
//   },
// ]

// //! classical
// // team.forEach((t,i) =>{
// //   console.log(i + 1 + '.NAME:', t.name);
// //   console.log('SURNAME:', t.surname);
// //   console.log('JOB:', t.job );
// //   console.log('AGE:', t.age);
// // })

// //! destructure
// // team.forEach((t,i) =>{
// //   const {name,surname,job,age} = t  //? destructure ederek yukarıda ki classical yöntemle yaptığımız t. lardan kurtulduk.
// //   console.log(i + 1 + '.NAME:', name);
// //   console.log('SURNAME:', surname);
// //   console.log('JOB:', job );
// //   console.log('AGE:', age);
// // })

// //! destructure array 
// const names = ['sezer', 'mehmet', 'ayşe', 'fatma', 'yeliz']
// //*clasic yöntem ile
// const a = names[1]
// console.log(a);

// //* destructure yöntem ile
// const [ p1, p2, , p4] = names
// console.log(p1, p2, p4);


// //! rest operator (...)
// // **Rest operatörü, birçok değeri tek bir değişkene toplamak veya bir işlevin parametrelerini dinamik olarak ele almak için kullanılır.
// const autos = ['anadol', 'reno', 'bmw', 'mercedes', 'ferrari']
// const [ x,y,...z] = autos  //? array de destructure ettik. arada olanaları clg ye yazmadı
// console.log(x,y,z);

// const personel ={
//   pName: "john",
//   surname: "smith",
//   job: "developer",
//   age: 30,
// }

// const { age, ...fullName } = personel   //? objelerde destructure ettik
// console.log(age);
// console.log(fullName);

// const { pName: x } = fullName
// console.log(x);  //? fullName in adını değiştirmiş olduk

//! spread (...)

//* array concatination
// const araba = [ 'volvo', 'reno', 'mazda']
// const telefon = ['samsung', 'huawe', 'redmi']

// // const a = [ araba,telefon, 123, 'sezer']

// // console.log(a);

// const a =[...araba, ...telefon]  //? array leri birleştirdik hepsini tek bir array içinde yazmış olduk
// console.log(a);

//* string spread
// let buryan = 'Buryan yemeği nereye aittir?'
// const a = [...buryan] //? string bir ifadeyi array haline getirmiş olduk
// console.log(buryan);
// console.log(a);

//* max()
// console.log(Math.max(1,3,6,3,2,98));

// const numbers = [3,1,23,49,52,44]
// console.log(Math.max(...numbers));  //? numbers array i açarak en büyük sayıya ulaştık

//*array copy
// const a = [3,5,7,9,24]
// const b = [-5,-4, ...a, -22]
//  console.log(a);
//  console.log(b);

//  const c = [...b]
//  c.push(-55)

//  c[5][1] = 88  //? nested olan değerlerde deep copy olmaz
// console.log(c);

//* object copy

const myObj = {a: 1, b: 2, c: 4 }
const herObj = {a: 2, z: 4, c: 3}

const copyObj = {...myObj}
console.log(copyObj);
copyObj.c = 44
console.log(myObj);
console.log(copyObj);

const combinedObjs = {...myObj, ...herObj}
console.log(combinedObjs);