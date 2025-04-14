
---

##  Login Admin

**Endpoint** : `POST /api/admin/login`

**Request Body**:

```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response Body (Success)**:

```json
{
  "data": {
    "username": "admin",
    "token": "admin_session_token"
  }
}
```

**Response Body (Failed)**:

```json
{
  "errors": "Invalid admin credentials"
}
```

---

##  Create Event

**Endpoint** : `POST /api/admin/events`

**Headers**:
- `Authorization: Bearer <admin_token>`

**Request Body**:

```json
{
  "title": "Indie Music Night",
  "description": "Live indie music event in Jakarta.",
  "date": "2025-09-10",
  "location": "Kemang Village",
  "price": 150000,
  "ticket_quota": 300
}
```

**Response Body (Success)**:

```json
{
  "data": {
    "id": "evt_999",
    "title": "Indie Music Night",
    "date": "2025-09-10"
  }
}
```

---

##  Update Event

**Endpoint** : `PATCH /api/admin/events/:id`

**Headers**:
- `Authorization: Bearer <admin_token>`

**Request Body** (opsional):

```json
{
  "title": "Indie Music Night - Updated",
  "price": 175000,
  "ticket_quota": 350
}
```

**Response Body (Success)**:

```json
{
  "data": {
    "id": "evt_999",
    "title": "Indie Music Night - Updated"
  }
}
```

---

##  Delete Event

**Endpoint** : `DELETE /api/admin/events/:id`

**Headers**:
- `Authorization: Bearer <admin_token>`

**Response Body (Success)**:

```json
{
  "data": true,
  "message": "Event deleted successfully"
}
```

---

##  Lihat Semua Tiket yang Dipesan

**Endpoint** : `GET /api/admin/tickets`

**Headers**:
- `Authorization: Bearer <admin_token>`

**Response Body (Success)**:

```json
{
  "data": [
    {
      "ticket_id": "tkt_101",
      "username": "johndoe",
      "event_title": "Music Festival 2025",
      "quantity": 2,
      "status": "booked"
    },
    {
      "ticket_id": "tkt_102",
      "username": "janedoe",
      "event_title": "Tech Conference",
      "quantity": 1,
      "status": "cancelled"
    }
  ]
}
```

---

##  Lihat Daftar Pengguna

**Endpoint** : `GET /api/admin/users`

**Headers**:
- `Authorization: Bearer <admin_token>`

**Response Body (Success)**:

```json
{
  "data": [
    {
      "username": "johndoe",
      "name": "John Doe"
    },
    {
      "username": "janedoe",
      "name": "Jane Doe"
    }
  ]
}
```

---
