import petsData from "./petsData";
import { makeAutoObservable } from "mobx";
class PetStore {
  pets = petsData;
  constructor() {
    makeAutoObservable(this);
  }
  adopt(petID) {
    this.pets = this.pets.filter((pet) => pet.id !== petID);
  }
}

const petStore = new PetStore();
export default petStore;
