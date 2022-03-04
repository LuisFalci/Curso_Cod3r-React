export default function If(props) {
  // Buscamos pelos filhos de If (no caso Else) por meio do filter
  // Se chil.type estiver setado e child.type.name for igual a Else, retorna o primeiro filho. O [0] significa que queremos pegar o primeiro filho do array
  const elseChild = props.children.filter((child) => {
    return child.type && child.type.name === "Else";
  })[0];

  const ifChildren = props.children.filter((child) => {
    return child !== elseChild;
  });

  if (props.test) {
    return ifChildren;
  } else if (elseChild) {
    return elseChild;
  } else {
    return false;
  }
}

export const Else = (props) => props.children;
