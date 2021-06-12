const data = {
    ballObj: {
        x: 20,
        y: 200,
        dx: 5,
        dy: 5,
        rad: 12,
        speed: 10,
    },
    brickObj: {
        x: 0.5,
        y: 50,
        width: 800 / 10 - 1,
        height: 20,
        density: 2,
        colors: ["blue", "ligthblue"],
    },
    player: {
        name: "Anonymous",
        lives: 5,
        score: 0,
        level: 1,
    },
    paddleProps: {
        height: 20,
        width: 100,
        x: 100,
        color: "orange"
    }
};

export default data