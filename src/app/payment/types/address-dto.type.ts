import { UUIDDto } from "../../../types/uuid-dto.type";

export interface ShippingAddressDto extends UUIDDto {
  address: string | null;

  city: string | null;

  phone: string | null;

  userId: string | null;

  postalCode: string | null;
}
