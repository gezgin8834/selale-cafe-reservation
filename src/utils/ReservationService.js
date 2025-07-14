  import { v4 as uuidv4 } from 'uuid';



class ReservationService {
  static getAll() {
    return JSON.parse(localStorage.getItem("reservations")) ?? [];
  }

  static getLast() {
    return JSON.parse(localStorage.getItem("onay")) || null;
  }

  


static add(reservation) {
  const newReservation = { id: uuidv4(), ...reservation };
  const existing = this.getAll();
  const updated = [...existing, newReservation];
  localStorage.setItem("reservations", JSON.stringify(updated));
  localStorage.setItem("onay", JSON.stringify(newReservation));
}


  static clearAll() {
    localStorage.removeItem("reservations");
    localStorage.removeItem("onay");
  }

  static delete(index) {
    const existing = this.getAll();
    if (index >= 0 && index < existing.length) {
      existing.splice(index, 1);
      localStorage.setItem("reservations", JSON.stringify(existing));
    }
  }

  static update(index, updatedReservation) {
    const existing = this.getAll();
    if (index >= 0 && index < existing.length) {
      existing[index] = updatedReservation;
      localStorage.setItem("reservations", JSON.stringify(existing));
    }
  }
}

export default ReservationService;

