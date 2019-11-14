const express = require('express')
const app = express()
const array_sort = require("./lib/arraysort")
const conditional = require("./lib/conditional")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`index node js`)
})

app.get("/hewan", (req, res) => {
    let hewan = ["Kucing", "Jerapah", "Angola", "Zebra", "Sapi"]
    console.log("Before ", hewan)

    let result = array_sort.ascending_sort(hewan)
    console.log("After ", result)

    return res.send(result)
})

app.get("/task2", (req, res) => {
    let hewan = ["Kucing", "Jerapah", "Angola", "Zebra", "Sapi"]
    console.log("Before ", hewan)

    let result = array_sort.descending_sort(hewan)
    console.log("After ", result)

    return res.send(result)
})

app.get("/fruit", (req, res) => {
    let fruits = ["jeruk", "apel", "melon", "semangka", "duren"]
    console.log("Before ", fruits)

    let result = array_sort.ascending_sort(fruits)
    console.log("After ", result)

    return res.send(result)
})

app.get("/number", (req, res) => {
    let angka = [3, 5, 2, 9, 8, 6, 4, 1, 7]
    console.log("Before ", angka)

    let result = array_sort.ascending_sort(angka)
    console.log("After ", result)

    return res.send(result)
})



app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})