import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  // extendi a interface para que não precise ficar colocando tudo aqui dentro da interface,
  // usando o ImgHTMLAttributes<HTMLImageElement> eu consigo usar a interface que o proprio Typescript fez pra mim
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: IAvatarProps) {
  //usei o props aqui no lugar das outras propriedades que estavam aqui para que o react aceite TODOS as propriedades que podem existir dentro de um elemento imagem
  //e com isso nao ter que ficar passando todas as propriedades que eu vou utilizar
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props} // coloquei o props aqui para que o react entenda que eu posso passar qualquer tipo de propriedade quando usar esse elemento
    />
  );
}
