import os from 'os'
import cluster from 'cluster'

const runPrimaryProcess = () => {
  const processesCount = os.cpus().length * 2

  console.log(`Primary ${process.pid} is running`)
  console.log(`Forking Server with ${processesCount} process \n`)

  for (let index = 0; index < processesCount; index++){
    cluster.fork()
  }
 }

const runWorkerProcess = async () => {
  await import('./server.js')
 }

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess()