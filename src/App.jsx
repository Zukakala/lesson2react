import './App.css'

function App() {
  let cardInfo = {
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAACUCAMAAADmiEg1AAAAMFBMVEXk5ueutLfg4uSnrrHn6eqqsbSxt7rS1dfW2dva3d7Hy82/xMa7wMPKztDq7O3CxskpgEGPAAAETElEQVR4nO2c25KkIAxAuQQExOb//3bRvk1v28olEqzyPM1O1VadoWKIkMjYxcXFxcXFxcXFxcUFHQDUBlkAE8KayYUQ3DQZK8QJ/gAAMTivlVQPJNfeDZ2rw80ErZXiH8R/+9H0aw5gNP+JNn2KAzNa/tbmXGpD7bgCWK+2rOd4kcF2t+aT3tOezfXQmfi4L33H36hV/yBSFvu55ILa9oVNlV7QvQT5VvZbXfE+xG2e9iJO7RwRmdYL1NKR5CfyL57amo1F3jzQWsNUZB1jfCDVzn4m31B6s92a5PeCE26cMGwWgNtIuroWyq05YU6BqThKFshqwyrrGOE0FVZxDqRe8PJk8ljwkcIaTO1yc04SKJVP5bzgE4G28PXrrQkC3FbsOU9ke21Ws1e+vNtnFKjNJgtj8yIFMLS5bl9cIYQJJ8iEBse7dVFYW1M9af1g3gKOt2vtjbDrzIzn9FbNvctfiD+8/Tm9+eXd1Lt9nCDlk+beyRcj27TOJ+Bw9p2ptfdwzn3+rHXVaevYurPBJ+3fG6DwouEDFdq/75z0vZhZhPWmOIeoPh7k7XfLhfo3NUlxObXZ3JMIzQF49TkyzSXmac/toS5QaI7tWX1tRXYvVbfgJEnw7l1TFErK7pnyIoWiNHlT3FegNKH1/GiWrjdpH0cULzzfdLTahTlF0fcpMZbe8/jSprj/+8LmiistevDObVbqpe8xs4Wwk9VegIxQ8V0NDITExW5+obOHSetb727IAUSQO+ZKun5C+83OhINSvkdrtszB+K/hnae0HnvJfitEc+f5//GiJPfOdpVGvgAQZhi1ko9BLymlHgfb+ZzXGzFMk1vG6qhNMoCFW+T+E7XPHoujEMJaY4Y7xtiIYL3qx+UFYQcXRu+91vNQ4ML8o/Z+DG4wgt36ko/OdhpnQz67rqXB+ZfxD3BGxOCh9mXzFGDc4p2Xe3vl6w+IOXEQ9/9HJx1DY/rO1/vu87qTqQNb22RS3X2gGd69senXpp6ornUwjWN9rkQw7ouVbnmMAmLYnsjNQGpn20R6tPZlQb2OiubHiwNMviaq182DPfiQE+MyahV3aLBYjxXX/6P4cJQ5MMeRI+TD3B8T5kipb0NcTwcsORy62A9z9DdnyJg0rxFHbpAAi537foF7xFJ9M5wO4tQaJB7+IYljHTPjTI7kmOOIt9aO4ginn6K9Nsq3aSi068+bUbrtisyrsgqEo+qoQ8WxhnSKKL+aPazYTqP4KrxNTfKbws9GlbYMoFEW4lUfUcDxLutkIrbmZW2/WAMMVeR/Mwryvu10ECr/dpn6obyTW9MSp+4XKjeJ9xDdM5kRXvRRqiPIaxEnLUw+yWrFquw0xiSrHRXj2w9IqIxPGnQUJjznQ1dYw6w4pL+ydZNNFpL3zPJm3SNIH1UHR+36QfLBG9lL/DrpNQrSzDMSyWcpFR/nO4TEt4dYesuuSJ6dFp2xovgPOvI9e4LYmyIAAAAASUVORK5CYII=",
    firstName: "Zuka",
    lastName: "Kala"
  }



  return (
    <>
      <div className="card">
        <img src={cardInfo.image} alt="" />
        <h4>{cardInfo.firstName}</h4>
        <h5>{cardInfo.lastName}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nostrum?</p>
      </div>
    </>
  )
}

export default App
