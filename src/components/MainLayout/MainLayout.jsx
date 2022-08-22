import styles from './MainLayout.module.css'

function MainLayout() {
  const albums = [
    {id: 1, title: "Bird-Brains", year:2009},
    {id: 2, title: "Whokill", year:2011},
    {id: 3, title: "Nikki Nack", year:2014},
    {id: 4, title: "I Can Feel You Creep Into My Private Life", year:2018},
    {id: 5, title: "Sketchy", year:2021}
  ]
  return (
    <div className={styles.root}>
      Oi!
      { albums.map(album => {
          return (<div key={album.id} className={styles.element}>
            <h1>{album.title}</h1>
            <h3>{album.year}</h3>
          </div>)

      })}
    </div>
  )
}

export default MainLayout
