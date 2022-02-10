process.stdout.write('\x1B[2J\x1B[0f') // Clear terminal screen
require('dotenv').config()

const express = require('express')

const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')


    const PORT = process.env.PORT
    app.listen(PORT, (err) => {
      if (err) {
        throw new Error(err)
      }
      console.info('>'.repeat(40))
      console.info('💻  Reboot Server Live')
      console.info(`📡  PORT: http://localhost:${PORT}`)
      console.info('>'.repeat(40) + '\n')
    })
  } catch (error) {
    throw new Error(error)
  }
