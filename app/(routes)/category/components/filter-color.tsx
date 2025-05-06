import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FilterColorProps = {
    setFilterColor: (origin: string) => void
}

const FilterColor = (props: FilterColorProps) => {
    const { setFilterColor } = props;
    const { result, loading }: { result: { color: string | null | undefined }[] | null; loading: boolean } = useGetProductField();

    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Color</p>
            {loading && result === null && (
                <p>Cargando colorcito...</p>
            )}

            <RadioGroup onValueChange={(value) => setFilterColor(value)}>
                {result !== null && Array.from(new Set(result.map((product: any) => product.color))
                )
                    .filter((color) => color !== undefined && color !== null)
                    .map((color: string) => (
                    <div key={color} className="flex items-center space-x-2">
                        <RadioGroupItem value={color} id={color} />
                        <Label htmlFor={color}>{color}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}

export default FilterColor;