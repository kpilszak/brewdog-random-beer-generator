import React, { useEffect, useState } from 'react'; // must download this package in the terminal
import ReactDOM from 'react-dom'; // must download this package in the terminal

function RandomBeer() {
  const [name, setName] = useState()
  const [volumeValue, setVolumeValue] = useState()
  const [volumeUnit, setVolumeUnit] = useState()

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(results => results.json())
    .then(data => {
      setName(data[0].name)
      const {volume} = data[0]
      setVolumeValue(volume.value)
      setVolumeUnit(volume.unit)
    })
  }, []) // this [] prevents data being fetched over and over again
  return(
    <div>
    {name}: {volumeValue} {volumeUnit}
    </div>
  )
}

ReactDOM.render(
  <RandomBeer/>,
  document.getElementById('root')
)
