export interface table {
    tableClass: string;
    cellClass: string;
    
  }
  
  export interface button {
    iconClass: string;
    text: string;
    class: string;
  }
  
  export interface column {
      sort?:boolean;
      search?:boolean;
      columnName : string;
      displayName: string;
      format?:string
      classT? : string;
      classBg?: string
      type?: string;
      pagination?:pagination

  }
  export interface buttondiv{
    buttonname:string,
    buttondesc :button
  }

  export interface pagination{
    page: number,
  }
