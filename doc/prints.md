---

##  Cetak E-Ticket (Download PDF)

**Endpoint** : `GET /api/tickets/:id/print`

**Headers**:
- `Authorization: Bearer <token>`

**Response (Success)**:
- Content-Type: `application/pdf`
- File Attachment: `ticket_tkt_987.pdf`

**Contoh Response (jika pakai JSON preview)**:

```json
{
  "message": "E-ticket PDF generated successfully"
}
```

> Catatan: Endpoint ini akan mengembalikan **file PDF**, bisa langsung dibuka/download oleh user. Format PDF dapat berisi:
- Nama pengguna
- Nama event
- Tanggal event
- Jumlah tiket
- QR Code atau Kode Tiket

---

##  Batal Tiket

**Endpoint** : `DELETE /api/tickets/:id`

**Headers**:
- `Authorization: Bearer <token>`

**Response Body (Success)**:

```json
{
  "data": true,
  "message": "Ticket canceled successfully"
}
```

**Response Body (Failed)**:

```json
{
  "errors": "Cannot cancel ticket less than 24 hours before event"
}
```

---
