export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const slf = this;
  this.f = (N) => { slf.sanFranciscoNeighborhoods.push(N); return slf.sanFranciscoNeighborhoods; };
  this.addNeighborhood = this.f;
}
