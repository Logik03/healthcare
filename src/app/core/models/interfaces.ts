export interface Patient {
    id: number;
    name: string;
    gender: string;
    age: number;
    imageUrl: string;
    dateOfBirth: string;
    contactInfo: string;
    emergencyContact: string;
    insuranceProvider: string;
}
  
export interface VitalStats {
    respiratoryRate: number;
    temperature: number;
    heartRate: number;
}

export interface ProfileInfo {
    name: string;
    age: string[];
    dateOfBirth: Date;
    gender : string;
    insuranceProvider : string;
    contactInfo: number;
    profilePicture: string;
    emergencyContact : number;
  }