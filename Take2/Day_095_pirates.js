const cannonsReady = (gunners) => {
  return (Object.values(gunners).includes('nay') === true ? 'Shiver me timbers!' : 'Fire!')
}