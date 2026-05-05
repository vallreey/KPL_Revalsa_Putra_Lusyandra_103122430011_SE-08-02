const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(express.json());

const generateNumberFromName = (name = "") =>
  (Array.from(name).reduce((acc, char, idx) =>
    acc + char.charCodeAt(0) * (idx + 1), 0) % 100) + 1;

const router = express.Router();

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tebak Angka API',
      version: '1.0.0'
    }
  },
  apis: ['./index.js']
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * Swagger API
 * @swagger
 * /:
 *   post:
 *     summary: Tebak angka berdasarkan nama
 *     tags:
 *       - Game
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama
 *               - tebakan
 *             properties:
 *               nama:
 *                 type: string
 *               tebakan:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Hasil tebakan
 */
router.post('/', (req, res) => {
  const { nama, tebakan } = req.body;

  const angkaRahasia = generateNumberFromName(nama);

  const responseMap = {
    equal: {
      condition: tebakan === angkaRahasia,
      message: `Benar sekali! Tebakannya adalah ${angkaRahasia}.`
    },
    high: {
      condition: tebakan > angkaRahasia,
      message: "Tebakanmu terlalu tinggi!"
    },
    low: {
      condition: tebakan < angkaRahasia,
      message: "Tebakanmu terlalu rendah!"
    }
  };

  const result =
    responseMap.equal.condition
      ? responseMap.equal.message
      : responseMap.high.condition
        ? responseMap.high.message
        : responseMap.low.message;

  res.json({ jawaban: result });
});

app.use('/', router);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});