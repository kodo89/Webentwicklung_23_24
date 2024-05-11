import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Hello from './components/Hello';
import ToDo from './components/ToDo';




const root = createRoot(document.body);



root.render(<ToDo/>)