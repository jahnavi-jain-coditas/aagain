import type { PropsWithChildren } from "react";
import styles from "./Table.module.scss";

const Table = ({ children }: PropsWithChildren) => {
  return (
    <table className={styles.Table}>{children}</table>
  )
}

Table.TableBody = ({ children }: PropsWithChildren) => {
  return (
    <tbody className={styles.TableBody}>{children}</tbody>
  )
}

Table.TableHead =({children}:PropsWithChildren)=>{
  return(
    <thead className={styles.TableHead}>{children}</thead>
  )
}

Table.HeaderCell =({children}:PropsWithChildren)=>{
  return(
    <th className={styles.headerCell}>{children}</th>
  )
}

Table.Row = ({ children }: PropsWithChildren) => {
  return (
    <tr className={styles.Row}>{children}</tr>
  )
}

Table.Cell = ({ children }: PropsWithChildren) => {
  return (
    <td className={styles.Cell}>{children}</td>
  )
}





export default Table;