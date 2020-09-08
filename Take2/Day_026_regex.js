function validateUsr(username) {
    console.log(username)
    let res = new RegExp(/^[a-z0-9_\-]{4,16}$/gm)
    return res.test(username)
  }