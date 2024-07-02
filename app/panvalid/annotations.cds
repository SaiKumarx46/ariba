using MyService as service from '../../srv/service';
annotate service.validation with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Pan_no',
                Value : Pan_no,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Gstin_no',
                Value : Gstin_no,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Pan_no',
            Value : Pan_no,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Gstin_no',
            Value : Gstin_no,
        },
    ],
);

