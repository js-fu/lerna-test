import foo from "./foo";

export default async function main() {
  console.log("hello project1");
  foo();
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ a: 1111 });
    }, 1000);
  });
  console.log(data);
}
