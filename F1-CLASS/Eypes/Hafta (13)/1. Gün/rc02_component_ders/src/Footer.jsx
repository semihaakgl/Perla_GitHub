//? Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
//? JSX icerisinde degiskenler {} icerisinde gosterilir.
//? bu yöntem çok kullanılmıyor.

//* Footer comp.

export const Footer = () => {
  return (
    <footer>
      <p>Copyright by EYPES {new Date().getFullYear()}</p>
    </footer>
  );
};
