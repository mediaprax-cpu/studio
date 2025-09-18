'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';

export interface Filters {
  search: string;
  category: string;
  sizes: string[];
}

interface ProductFiltersProps {
  initialFilters: Filters;
  onFilterChange: (filters: Filters) => void;
}

export function ProductFilters({ initialFilters, onFilterChange }: ProductFiltersProps) {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  useEffect(() => {
    // We only call onFilterChange when the component has mounted
    // to avoid triggering updates during server-side rendering.
    if (isClient) {
      onFilterChange(filters);
    }
  }, [filters, isClient, onFilterChange]);


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };
  
  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({ ...prev, category }));
  };
  
  const handleSizeChange = (size: string) => {
    setFilters(prev => {
      const newSizes = prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size];
      return { ...prev, sizes: newSizes };
    });
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };
  
  const sizes = ['2T', '3T', '4T', '5T', '6', '7', '8', '0-3M', '3-6M', '6-9M', 'Newborn'];

  return (
    <Card className="sticky top-20 shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle>Filter & Search</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search by description..." 
            className="pl-10 rounded-full"
            value={filters.search}
            onChange={handleSearchChange}
          />
        </div>

        <div>
          <Label className="text-lg font-semibold mb-2 block">Category</Label>
          <RadioGroup 
            value={filters.category} 
            onValueChange={handleCategoryChange}
            className="space-y-1"
           >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="cat-all" />
              <Label htmlFor="cat-all">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="boys" id="cat-boys" />
              <Label htmlFor="cat-boys">Boys</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="girls" id="cat-girls" />
              <Label htmlFor="cat-girls">Girls</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="newborn" id="cat-newborn" />
              <Label htmlFor="cat-newborn">Newborn</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-lg font-semibold mb-2 block">Size</Label>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox 
                  id={`size-${size}`}
                  checked={filters.sizes.includes(size)}
                  onCheckedChange={() => handleSizeChange(size)}
                />
                <Label htmlFor={`size-${size}`} className="font-normal">{size}</Label>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full rounded-full shadow-md" onClick={handleApplyFilters}>Apply Filters</Button>
      </CardContent>
    </Card>
  );
}
